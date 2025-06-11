import { useState } from "react";
import "/src/styles/components/education.css";
import ButtonSwitch from "./ButtonSwitch.jsx";
import Timeline from "./Timeline.jsx";

export default function Journey() {
  const [selected, setSelected] = useState("education");

  return (
    <div className="education-container">
      <h1>
        My <span>Journey</span>
      </h1>
      <ButtonSwitch selected={selected} setSelected={setSelected} />
      <Timeline selected={selected} />
    </div>
  );
}
