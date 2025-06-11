import "/src/styles/components/projects.css";
import ProjectTag from "./ProjectTag";

export default function ProjectCard({ title, description, tags }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <ProjectTag name={tags} />
    </>
  );
}
