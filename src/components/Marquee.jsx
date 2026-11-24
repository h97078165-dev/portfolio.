import { marqueeItems } from "../data/site";
import { techIcons } from "./icons";
import { FiCode } from "react-icons/fi";

export default function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Technologies I work with">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
            {marqueeItems.map((item) => {
              const Icon = techIcons[item.icon] || FiCode;
              return (
                <span className="marquee-item" key={`${copy}-${item.name}`}>
                  <Icon aria-hidden="true" />
                  {item.name}
                  <span className="marquee-star" aria-hidden="true">
                    ✦
                  </span>
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
