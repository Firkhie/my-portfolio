import { useEffect, useRef } from "react";

interface ScrollObserverProps {
  onChange: (heading: string) => void;
}

export default function ScrollObserver({ onChange }: ScrollObserverProps) {
  const textContentsRef = useRef<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const textContent = entry.target.textContent || "";
          if (!textContentsRef.current.includes(textContent)) {
            textContentsRef.current.push(textContent);
          }

          if (!entry.isIntersecting && entry.boundingClientRect.top <= 64) {
            onChange(entry.target.textContent || "");
          } else if (
            entry.isIntersecting &&
            entry.boundingClientRect.top <= 64
          ) {
            const index = textContentsRef.current.indexOf(textContent) - 1;
            if (index >= 0) {
              onChange(textContentsRef.current[index] || "");
            } else {
              onChange("");
            }
          }
        });
      },
      {
        rootMargin: "-64px 0px 0px 0px",
      },
    );

    const headings = document.querySelectorAll("h2");
    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, [onChange]);

  return null;
}
