import { FiArrowUp } from "react-icons/fi";
import { useScrolledPast } from "../hooks/useSite";

export default function BackToTop() {
  const visible = useScrolledPast(700);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      aria-hidden={visible ? undefined : "true"}
      tabIndex={visible ? 0 : -1}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}
