import { useEffect, useRef, useState } from "react";

// Fades content up as it scrolls into view. Respects reduced-motion via CSS.
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
