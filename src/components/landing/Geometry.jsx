import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Edges } from "@react-three/drei";
import { useRef, useEffect } from "react";

function Model({ rotationSpeed }) {
  const meshRef = useRef();
  const rotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    // Rotazione automatica continua
    const autoRotateSpeed = 0.002;

    rotation.current.x += rotationSpeed.current.y + autoRotateSpeed;
    rotation.current.y += rotationSpeed.current.x + autoRotateSpeed;

    if (meshRef.current) {
      meshRef.current.rotation.x = rotation.current.x;
      meshRef.current.rotation.y = rotation.current.y;
    }

    // Inerzia: decadimento della velocità derivata dal mouse
    rotationSpeed.current.x *= 0.95;
    rotationSpeed.current.y *= 0.95;
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial color="#007676" />
      <Edges color="#00E0D1" linewidth={2} />
    </Icosahedron>
  );
}

function Light() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} />
    </>
  );
}

export default function Geometry() {
  const rotationSpeed = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      const dx = x - lastMouse.current.x;
      const dy = y - lastMouse.current.y;

      rotationSpeed.current.x += dx * 0.15;
      rotationSpeed.current.y += dy * 0.15;

      lastMouse.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <Model rotationSpeed={rotationSpeed} />
      <Light />
    </Canvas>
  );
}
