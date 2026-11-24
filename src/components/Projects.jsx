import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/site";
import { techByName } from "./icons";
import { FiCode } from "react-icons/fi";
import ProjectArt from "./ProjectArt";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="03 — Selected work"
          title={
            <>
              Built, shipped, and <span className="serif grad-text">live</span>
              <span className="accent-dot" aria-hidden="true" />
            </>
          }
          description="Three real builds — a full-stack creative platform, a responsive frontend clone, and an online storefront."
        />

        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              className={`project-card ${index % 2 === 1 ? "is-reversed" : ""}`}
              key={project.title}
              delay={index * 60}
            >
              <a
                className="project-media"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — open the live demo in a new tab`}
              >
                <ProjectArt variant={project.art} domain={project.domain} />
                <span className="project-live-pill">
                  Live demo
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </a>

              <div className="project-body">
                <div className="project-topline">
                  <span className="project-index">{project.index}</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => {
                    const Icon = techByName[tech] || FiCode;
                    return (
                      <li className="project-tag" key={tech}>
                        <Icon aria-hidden="true" />
                        {tech}
                      </li>
                    );
                  })}
                </ul>

                <div className="project-actions">
                  <a
                    className="btn btn-ghost btn-sm"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View the ${project.title} live demo in a new tab`}
                  >
                    View live demo
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                  <span className="project-note">Live on Vercel</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
