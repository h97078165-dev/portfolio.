import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="nav-brand" href="#home" aria-label="Sheeza Ahsan — back to top">
              <span className="monogram" aria-hidden="true">
                {site.initials}
              </span>
              <span className="nav-brand-text">
                <strong>{site.name}</strong>
                <span>Full-Stack Developer</span>
              </span>
            </a>
            <p>
              Full-stack developer and IT undergraduate building thoughtful, responsive web
              products from Multan, Pakistan.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a className="footer-link" href={`#${link.id}`} key={link.id}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
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
            <a
              className="icon-btn"
              href={`mailto:${site.email}`}
              aria-label="Send Sheeza an email"
            >
              <FiMail aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span className="mono">Designed &amp; built with React + Tailwind CSS</span>
          <a className="footer-link inline-flex items-center gap-1.5" href="#home">
            Back to top
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
