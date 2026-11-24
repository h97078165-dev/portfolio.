import { FiAward, FiBookOpen, FiCheck } from "react-icons/fi";
import { certifications, education, softSkills } from "../data/site";
import { uiIcons } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="04 — Education & credentials"
          title={
            <>
              Foundations, <span className="serif grad-text">formally</span>
              <span className="accent-dot" aria-hidden="true" />
            </>
          }
          description="A formal IT education in progress, backed by focused certifications and hands-on training."
        />

        <div className="edu-grid">
          <Reveal className="edu-card">
            <div className="edu-top">
              <span className="edu-date">
                <FiBookOpen aria-hidden="true" />
                {education.duration}
              </span>
              <span className="edu-status">
                <span className="status-dot" style={{ width: 5, height: 5 }} aria-hidden="true" />
                {education.status}
              </span>
            </div>

            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-school">{education.university}</p>
            <p className="edu-note">{education.note}</p>

            <ul className="mt-4 grid gap-2">
              {education.points.map((point) => (
                <li
                  className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-muted"
                  key={point}
                >
                  <FiCheck className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="edu-track" aria-label="Degree timeline from 2023 to 2027">
              <div className="edu-track-node">
                <i aria-hidden="true" />
                <span>
                  <b>2023</b> · Started
                </span>
              </div>
              <span className="edu-track-mid">{education.semester}</span>
              <div className="edu-track-node">
                <i aria-hidden="true" />
                <span>
                  <b>2027</b> · Expected
                </span>
              </div>
            </div>
          </Reveal>

          <div className="cert-stack" aria-label="Certifications and training">
            {certifications.map((cert, index) => {
              const Icon = uiIcons[cert.icon] || FiAward;
              return (
                <Reveal className="cert-card" key={cert.title} delay={index * 70}>
                  <span className="cert-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    <span className="cert-type">{cert.type}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="soft-skills" delay={80}>
          <div className="soft-skills-head">
            <FiAward aria-hidden="true" />
            Ways of working
          </div>
          <ul className="soft-skills-list">
            {softSkills.map((skill) => {
              const Icon = uiIcons[skill.icon] || FiCheck;
              return (
                <li className="soft-skill" key={skill.label}>
                  <Icon aria-hidden="true" />
                  {skill.label}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
