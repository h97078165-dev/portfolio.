import { useEffect, useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import { SiNodedotjs, SiReact } from "react-icons/si";

export default function HeroVisual() {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const onMove = (event) => {
      const rect = wrap.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        card.style.setProperty("--ry", (x * 7).toFixed(2));
        card.style.setProperty("--rx", (-y * 5).toFixed(2));
      });
    };

    const onLeave = () => {
      card.style.setProperty("--ry", "0");
      card.style.setProperty("--rx", "0");
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="hero-visual" ref={wrapRef} aria-hidden="true">
      <div className="ring ring-1" />
      <div className="ring ring-2" />

      <span className="orbit-note">Portfolio — 2026</span>

      <div className="code-card" ref={cardRef}>
        <div className="code-head">
          <span className="code-dot" />
          <span className="code-dot" />
          <span className="code-dot" />
          <span className="code-file">sheeza.config.js</span>
        </div>

        <div className="code-body">
          <div className="code-line">
            <span className="code-num">1</span>
            <code>
              <span className="tok-key">const</span> <span className="tok-var">developer</span>{" "}
              <span className="tok-punct">= {"{"}</span>
            </code>
          </div>
          <div className="code-line">
            <span className="code-num">2</span>
            <code>
              {"  "}
              <span className="tok-var">name</span>
              <span className="tok-punct">:</span>{" "}
              <span className="tok-str">&quot;Sheeza Ahsan&quot;</span>
              <span className="tok-punct">,</span>
            </code>
          </div>
          <div className="code-line">
            <span className="code-num">3</span>
            <code>
              {"  "}
              <span className="tok-var">role</span>
              <span className="tok-punct">:</span>{" "}
              <span className="tok-str">&quot;Full-Stack Developer&quot;</span>
              <span className="tok-punct">,</span>
            </code>
          </div>
          <div className="code-line">
            <span className="code-num">4</span>
            <code>
              {"  "}
              <span className="tok-var">stack</span>
              <span className="tok-punct">: [</span>
              <span className="tok-str">&quot;React&quot;</span>
              <span className="tok-punct">, </span>
              <span className="tok-str">&quot;Next.js&quot;</span>
              <span className="tok-punct">],</span>
            </code>
          </div>
          <div className="code-line">
            <span className="code-num">5</span>
            <code>
              {"  "}
              <span className="tok-var">basedIn</span>
              <span className="tok-punct">:</span>{" "}
              <span className="tok-str">&quot;Multan, PK&quot;</span>
              <span className="tok-punct">,</span>
            </code>
          </div>
          <div className="code-line">
            <span className="code-num">6</span>
            <code>
              {"  "}
              <span className="tok-var">learning</span>
              <span className="tok-punct">:</span> <span className="tok-bool">true</span>
              <span className="tok-punct">,</span>
            </code>
          </div>
          <div className="code-line">
            <span className="code-num">7</span>
            <code>
              {"  "}
              <span className="tok-var">openToWork</span>
              <span className="tok-punct">:</span> <span className="tok-bool">true</span>
              <span className="tok-punct">,</span>
              <span className="code-caret" />
            </code>
          </div>
          <div className="code-line">
            <span className="code-num">8</span>
            <code>
              <span className="tok-punct">{"}"}</span>
            </code>
          </div>
        </div>

        <div className="code-foot">
          <span className="code-chip">react</span>
          <span className="code-chip">next.js</span>
          <span className="code-chip">node.js</span>
          <span className="code-chip">tailwind</span>
        </div>
      </div>

      <span className="float-chip chip-a">
        <SiReact />
        React
      </span>
      <span className="float-chip chip-b">
        <SiNodedotjs />
        Node.js
      </span>
      <span className="float-chip chip-c">
        <FiMapPin />
        Multan, PK
      </span>
    </div>
  );
}
