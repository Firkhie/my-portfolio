import { useEffect } from "react";

interface ScrollObserverProps {
  onChange: (heading: string) => void;
}

export default function ScrollObserver({ onChange }: ScrollObserverProps) {
  useEffect(() => {
    // Ambil semua section, misal h2
    const sections = Array.from(
      document.querySelectorAll("h2"),
    ) as HTMLElement[];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarOffset = 64;

      let current = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const top = sections[i].offsetTop - navbarOffset;
        if (scrollY >= top) {
          current = sections[i].textContent || "";
          break;
        }
      }

      onChange(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onChange]);

  return null;
}
