import { useState } from "react";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiCopy,
  FiGithub,
  FiInfo,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { site } from "../data/site";
import { buildMailto, validateContact } from "../lib/contact";
import Reveal from "./Reveal";

const EMPTY = { name: "", email: "", message: "" };
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

function ContactRow({ icon: Icon, label, value, href, external = false, title }) {
  const content = (
    <>
      <span className="contact-link-icon">
        <Icon aria-hidden="true" />
      </span>
      <span className="contact-link-text">
        <span>{label}</span>
        <strong title={title || value}>{value}</strong>
      </span>
      {href ? <FiArrowUpRight className="contact-link-arrow" aria-hidden="true" /> : null}
    </>
  );

  if (!href) {
    return <div className="contact-link">{content}</div>;
  }

  return (
    <a
      className="contact-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus({
        state: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    if (ENDPOINT) {
      setSending(true);
      setStatus({ state: "idle", message: "" });
      try {
        const response = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...values,
            _subject: `Portfolio enquiry — ${values.name}`,
          }),
        });

        if (!response.ok) throw new Error("Request failed");

        setStatus({
          state: "success",
          message: "Message sent — thank you. I'll get back to you as soon as I can.",
        });
        setValues(EMPTY);
        setCopied(false);
      } catch {
        setStatus({
          state: "error",
          message: `The message couldn't be sent right now. Please email me directly at ${site.email}.`,
        });
      } finally {
        setSending(false);
      }
      return;
    }

    window.location.href = buildMailto(site.email, values);
    setCopied(false);
    setStatus({
      state: "mailto",
      message: `Your email app is opening with this message filled in. Press send there to reach me — or write to ${site.email} directly.`,
    });
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(values.message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      setStatus({
        state: "error",
        message: "Couldn't copy automatically — please select the message text and copy it manually.",
      });
    }
  }

  const statusState = status.state === "mailto" ? "info" : status.state;

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <div className="contact-panel">
          <div className="contact-copy">
            <Reveal>
              <p className="eyebrow">05 — Contact</p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="contact-title">
                Have an idea?
                <br />
                <span className="serif grad-text">Let&apos;s make it real</span>
                <span className="accent-dot" aria-hidden="true" />
              </h2>
            </Reveal>

            <Reveal delay={110}>
              <p className="contact-sub">
                I&apos;m open to internships, junior developer roles, and collaborative projects.
                If you&apos;re building something on the web, I&apos;d love to hear about it.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="contact-links">
                <ContactRow
                  icon={FiMail}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <ContactRow
                  icon={FiPhone}
                  label="Phone"
                  value={site.phone}
                  href={`tel:${site.phoneHref}`}
                />
                <ContactRow icon={FiMapPin} label="Location" value={site.location} />
                <ContactRow
                  icon={FiLinkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/shiza-r-422242343"
                  href={site.linkedin}
                  external
                  title="Sheeza Ahsan on LinkedIn"
                />
                <ContactRow
                  icon={FiGithub}
                  label="GitHub"
                  value="github.com/sheezaahsan-sa"
                  href={site.github}
                  external
                  title="Sheeza Ahsan on GitHub"
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="contact-socials">
                <span className="contact-socials-note">Find me online</span>
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
                <a className="icon-btn" href={`mailto:${site.email}`} aria-label="Send an email">
                  <FiMail aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <form className="form-card" onSubmit={handleSubmit} noValidate>
              <div className="form-head">
                <h3>Send a message</h3>
                <span>{ENDPOINT ? "Direct to inbox" : "Email draft"}</span>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    value={values.name}
                    onChange={update("name")}
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name ? (
                    <p className="field-error" id="contact-name-error">
                      <FiAlertCircle aria-hidden="true" />
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="contact-email">Your email</label>
                  <input
                    id="contact-email"
                    className="input"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    value={values.email}
                    onChange={update("email")}
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email ? (
                    <p className="field-error" id="contact-email-error">
                      <FiAlertCircle aria-hidden="true" />
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="field field-full">
                  <label htmlFor="contact-message">Your message</label>
                  <textarea
                    id="contact-message"
                    className="input"
                    name="message"
                    rows={5}
                    placeholder="Tell me what you're working on, or what you'd like to build together."
                    required
                    value={values.message}
                    onChange={update("message")}
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message ? (
                    <p className="field-error" id="contact-message-error">
                      <FiAlertCircle aria-hidden="true" />
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={sending}>
                  {sending ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <FiSend aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="form-micro">
                  {ENDPOINT
                    ? "Delivered straight to my inbox."
                    : "Opens your email app with the message ready to send."}
                </p>
              </div>

              {status.state !== "idle" ? (
                <div
                  className="form-status"
                  data-state={statusState}
                  role={status.state === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status.state === "success" ? (
                    <FiCheckCircle aria-hidden="true" />
                  ) : status.state === "error" ? (
                    <FiAlertCircle aria-hidden="true" />
                  ) : status.state === "mailto" ? (
                    <FiMail aria-hidden="true" />
                  ) : (
                    <FiInfo aria-hidden="true" />
                  )}
                  <div>
                    <span>{status.message}</span>
                    {status.state === "mailto" && values.message ? (
                      <button type="button" className="copy-btn" onClick={copyMessage}>
                        <FiCopy aria-hidden="true" />
                        {copied ? "Copied to clipboard" : "Copy message"}
                      </button>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
