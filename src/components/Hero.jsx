import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { site } from "../data/site";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="aurora aurora-a" aria-hidden="true" />
      <div className="aurora aurora-b" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      <div className="container-x">
        <div className="hero-grid">
          <div className="hero-copy">
            {site.availability.enabled ? (
              <Reveal>
                <p className="status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  {site.availability.label}
                </p>
              </Reveal>
            ) : null}

            <Reveal delay={60}>
              <h1 className="hero-name" aria-label={site.name}>
                <span>{site.firstName}</span>
                <span>
                  <span className="serif grad-text">{site.lastName}</span>
                  <span className="hero-dot" aria-hidden="true" />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="hero-role">
                <span className="hero-role-line" aria-hidden="true" />
                <span>{site.role}</span>
                <span className="hero-role-sep" aria-hidden="true">
                  /
                </span>
                <span className="text-muted">{site.secondaryRole}</span>
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="hero-intro">{site.intro}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  Explore my work
                  <FiArrowDownRight aria-hidden="true" />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Let&apos;s connect
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="hero-meta">
                <div className="hero-social">
                  <a
                    className="icon-btn"
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sheeza Ahsan on GitHub"
                  >
                    <FiGithub aria-hidden="true" />
                  </a>
                  <a
                    className="icon-btn"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sheeza Ahsan on LinkedIn"
                  >
                    <FiLinkedin aria-hidden="true" />
                  </a>
                </div>
                <span className="hero-divider" aria-hidden="true" />
                <span className="hero-location">
                  <FiMapPin aria-hidden="true" />
                  {site.locationShort}
                </span>
                <span className="hero-divider" aria-hidden="true" />
                <a className="hero-location" href={site.cvPath} download>
                  <FiDownload aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-visual-wrap">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
