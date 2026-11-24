import { useEffect, useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { navLinks, site } from "../data/site";
import { useActiveSection, useScrollState, useTheme } from "../hooks/useSite";

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { scrolled, progress } = useScrollState();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const getFocusable = () =>
      Array.from(panel?.querySelectorAll('a[href], button:not([disabled])') || []);

    getFocusable()[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const items = getFocusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const themeLabel = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <a className="nav-brand" href="#home" aria-label="Sheeza Ahsan — back to top">
            <span className="monogram" aria-hidden="true">
              {site.initials}
            </span>
            <span className="nav-brand-text">
              <strong>Sheeza Ahsan</strong>
              <span>Full-Stack Developer</span>
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`nav-link ${active === link.id ? "is-active" : ""}`}
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-btn theme-toggle"
              onClick={toggle}
              aria-label={themeLabel}
              title={themeLabel}
            >
              <FiSun className="icon-sun" aria-hidden="true" />
              <FiMoon className="icon-moon" aria-hidden="true" />
            </button>

            <a className="btn btn-primary nav-cta" href="#contact">
              Let&apos;s talk
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              className="icon-btn menu-toggle"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <FiMenu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          ref={panelRef}
        >
          <div className="mobile-menu-top">
            <div className="nav-brand">
              <span className="monogram" aria-hidden="true">
                {site.initials}
              </span>
              <span className="nav-brand-text">
                <strong>Sheeza Ahsan</strong>
                <span>Full-Stack Developer</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="icon-btn theme-toggle"
                onClick={toggle}
                aria-label={themeLabel}
                title={themeLabel}
              >
                <FiSun className="icon-sun" aria-hidden="true" />
                <FiMoon className="icon-moon" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </div>

          <nav aria-label="Mobile">
            <ul className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    className={`mobile-menu-link ${active === link.id ? "is-active" : ""}`}
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    aria-current={active === link.id ? "page" : undefined}
                    style={{ animationDelay: `${70 + index * 45}ms` }}
                  >
                    <span aria-hidden="true">0{index + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-foot">
            <a className="mobile-menu-mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="mobile-menu-actions">
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
              <a className="btn btn-primary btn-sm" href={`mailto:${site.email}`}>
                Email me
              </a>
            </div>
            <a className="btn btn-ghost btn-sm" href={site.cvPath} download>
              <FiDownload aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
