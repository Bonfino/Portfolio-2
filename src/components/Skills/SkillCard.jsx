import "/src/styles/components/skills.css";

export default function SkillCard({ title, logo }) {
  return (
    <div className="card-container">
      <h1>{title}</h1>
      <div className="minicard-container">
        {logo &&
          logo.map((tech, index) => (
            <div key={index} className="card-info">
              {tech.icon && (
                <img src={tech.icon} alt={tech.name} loading="lazy" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
