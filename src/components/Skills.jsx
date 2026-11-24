import { FiArrowUpRight } from "react-icons/fi";
import { skillGroups } from "../data/site";
import { techIcons, techByName, uiIcons } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SkillCard({ group, index }) {
  const Icon = uiIcons[group.icon] || uiIcons.code;

  const handlePointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <Reveal
      className={`skill-card spotlight skill-span-${group.span}`}
      delay={index * 55}
      onPointerMove={handlePointer}
    >
      <div className="skill-head">
        <span className="skill-icon">
          <Icon aria-hidden="true" />
        </span>
        <span className="skill-index">{`0${index + 1}`}</span>
      </div>
      <h3>{group.title}</h3>
      <p className="skill-note">{group.note}</p>
      <ul className="tech-list" aria-label={`${group.title} technologies`}>
        {group.items.map((item) => {
          const TechIcon = techIcons[item.icon] || uiIcons.code;
          return (
            <li className="tech-tag" key={`${group.id}-${item.name}`}>
              <TechIcon aria-hidden="true" />
              {item.name}
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}

export default function Skills() {
  const PostgresIcon = techByName.PostgreSQL;
  const SupabaseIcon = techByName.Supabase;

  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="02 — Toolkit"
          title={
            <>
              The stack I <span className="serif grad-text">build</span> with
              <span className="accent-dot" aria-hidden="true" />
            </>
          }
          description="The languages, frameworks, and tools I use across frontend, backend, and the database layer."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillCard group={group} index={index} key={group.id} />
          ))}
        </div>

        <Reveal className="skills-footnote" delay={120}>
          <FiArrowUpRight aria-hidden="true" />
          <span>
            Also working with <span className="mono">PostgreSQL</span> and{" "}
            <span className="mono">Supabase</span> in the Dribbble Clone build.
          </span>
          <span className="ml-auto flex items-center gap-2 text-accent" aria-hidden="true">
            <PostgresIcon className="text-base" />
            <SupabaseIcon className="text-base" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
