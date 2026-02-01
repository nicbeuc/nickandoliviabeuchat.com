"use client";

import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Nav.module.css";

const FALLBACK_COLOR = "var(--color-beige)";

const NAV_ITEMS = [
  { href: "#our-story", label: "Our Story" },
  { href: "#details", label: "Details" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#registry", label: "Registry" },
];

export default function Nav() {
  const [navColor, setNavColor] = useState(FALLBACK_COLOR);
  const [activeSection, setActiveSection] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const intersectingSections = useRef(new Set());
  const activeSections = useRef(new Set());

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-color-scheme]");

    const colorObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingSections.current.add(entry.target);
            const sectionStyles = getComputedStyle(entry.target);
            const foregroundColor = sectionStyles.getPropertyValue("--color-foreground").trim();
            setNavColor(foregroundColor);
          } else {
            intersectingSections.current.delete(entry.target);
            if (intersectingSections.current.size === 0) {
              setNavColor(FALLBACK_COLOR);
            }
          }
        });
      },
      { rootMargin: "-50px 0px -90% 0px", threshold: 0 }
    );

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSections.current.add(entry.target);
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            } else {
              setActiveSection(null);
            }
          } else {
            activeSections.current.delete(entry.target);

            const remainingWithId = [...activeSections.current].find(s => s.id);
            if (remainingWithId) {
              setActiveSection(remainingWithId.id);
            } else {
              setActiveSection(null);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -90% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      colorObserver.observe(section);
      activeObserver.observe(section);
    });

    const contentAboveFooter = document.querySelector(".non-sticky-sections-inner");

    const checkFooterCoverage = () => {
      if (!contentAboveFooter) return;

      const rect = contentAboveFooter.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const threshold = viewportHeight * 0.25;
      setIsHidden(rect.bottom <= threshold);
    };

    window.addEventListener("scroll", checkFooterCoverage, { passive: true });
    window.addEventListener("resize", checkFooterCoverage, { passive: true });
    checkFooterCoverage();

    return () => {
      colorObserver.disconnect();
      activeObserver.disconnect();
      window.removeEventListener("scroll", checkFooterCoverage);
      window.removeEventListener("resize", checkFooterCoverage);
    };
  }, []);

  return (
    <header
      className={`${styles.nav} ${isHidden ? styles.hidden : ""}`}
      style={{ "--color-foreground": navColor }}
    >
      <nav className={styles.navWrapper}>
        <ul>
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={activeSection === href.slice(1) ? "true" : undefined}
              >
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}