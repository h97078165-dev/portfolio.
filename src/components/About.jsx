import { site } from "../data/site";
import { uiIcons } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="01 — About"
          title={
            <>
              A developer shaped by <span className="serif grad-text">curiosity</span> and craft
              <span className="accent-dot" aria-hidden="true" />
            </>
          }
          description="An IT undergraduate with a builder's mindset — focused on the modern web stack and on turning ideas into working products."
        />

        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="portrait-card">
              <span className="portrait-corner tl">Portfolio / 2026</span>
              <span className="portrait-corner tr">{site.locationShort}</span>
              <span className="portrait-initials" aria-hidden="true">
                {site.initials}
              </span>
              <div className="portrait-badge">
                <span className="portrait-avatar" aria-hidden="true">
                  {site.initials}
                </span>
                <div>
                  <strong>{site.name}</strong>
                  <span>Full-Stack Developer</span>
                </div>
                <span className="portrait-badge-dot" aria-hidden="true" />
              </div>
            </div>

            <div className="stat-grid">
              {site.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="now-card">
              <div className="now-label">
                <span className="status-dot" aria-hidden="true" />
                Right now
              </div>
              <ul className="now-list">
                {site.aboutNotes.map((note, index) => {
                  const Icon = index === 0 ? uiIcons.spark : uiIcons.target;
                  return (
                    <li key={note}>
                      <Icon aria-hidden="true" />
                      {note}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <div className="about-copy">
            <Reveal>
              <p className="lead">{site.about[0]}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="body-copy">{site.about[1]}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="body-copy">{site.about[2]}</p>
            </Reveal>

            <div className="highlight-grid">
              {site.highlights.map((item, index) => {
                const Icon = uiIcons[item.icon] || uiIcons.code;
                return (
                  <Reveal
                    className="highlight-card"
                    delay={140 + index * 60}
                    key={item.title}
                  >
                    <span className="highlight-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
