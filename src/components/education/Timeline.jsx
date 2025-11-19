import "/src/styles/components/education.css";

export default function Timeline({ selected }) {
  const educationData = [
    {
      year: "2024 - Now",
      desc: "Higher Technical Institute in AR/VR - Game Development",
      website: "https://www.accademiadigitaleliguria.it",
    },
    {
      year: "2022 - 2024",
      desc: "Bachelor’s degree in Computer Engineering (2 years)",
      website: "https://unige.it",
    },
    {
      year: "2017 - 2022",
      desc: "Technical Diploma in Computer Science and Telecommunications, Computer Science specialization.",
      website: "https://www.majorana-giorgi.edu.it",
    },
  ];

  const workData = [
    {
      year: "2025 - Now",
      desc: "Team Test Lead (TTL) - " + "Coordinating test cycles, supporting the tester community, validating test cases, and ensuring bug report quality.",
      website: "https://support.utest.com/csp?id=kb_article_view&sysparm_article=KB0010085&sys_kb_id=0b534065dbe3bc10dccccf5e13961982&spa=1",
    },
    {
      year: "2023 - Now",
      desc:
        "QA Tester at uTest - " +
        "Functional and usability testing across platforms; bug reporting; test management tools.",
      website: "https://www.utest.com/",
    },
  ];

  const data = selected === "education" ? educationData : workData;

  return (
    <div className="timeline">
      {data.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}
        >
          <h3>{item.year}</h3>
          <p>{item.desc}</p>

          {item.website && (
            <a
              className="timeline-link"
              href={
                item.website.startsWith("http")
                  ? item.website
                  : `https://${item.website}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
