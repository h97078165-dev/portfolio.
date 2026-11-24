import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-head">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <div className="section-head-row">
        <Reveal delay={60}>
          <h2 className="h2">{title}</h2>
        </Reveal>
        {description ? (
          <Reveal delay={130}>
            <p className="section-desc">{description}</p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
