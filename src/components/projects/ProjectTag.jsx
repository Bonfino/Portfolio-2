import "/src/styles/components/projects.css";

export default function ProjectTag({ name }) {
  return (
    <div className="project-minicard-tags">
      {name.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}
