import "/src/styles/components/education.css";

export default function ButtonSwitch({ selected, setSelected }) {
  const buttons = [
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
  ];

  return (
    <div className="button-switch">
      {buttons.map(({ id, label }) => (
        <button
          key={id}
          className={`button-${id} ${selected === id ? "active" : ""}`}
          onClick={() => setSelected(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
