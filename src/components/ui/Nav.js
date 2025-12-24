"use client";

import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Nav.module.css";

const FALLBACK_COLOR = "var(--color-beige)";

const NAV_ITEMS = [
  { href: "#our-story", label: "Our Story" },
  { href: "#details", label: "Details" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Nav() {
  const [navColor, setNavColor] = useState(FALLBACK_COLOR);
  const [activeSection, setActiveSection] = useState(null);
  const intersectingSections = useRef(new Set());
  const activeSections = useRef(new Set());

  useEffect(() => {
    const sections = document.querySelectorAll("[data-color-scheme]");

    // Observer for nav color (existing)
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

    // Observer for active section
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSections.current.add(entry.target);
            // Only set active if section has an ID
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            } else {
              // Section without ID is visible, clear active
              setActiveSection(null);
            }
          } else {
            activeSections.current.delete(entry.target);

            // Check remaining intersecting sections
            const remainingWithId = [...activeSections.current].find(s => s.id);
            if (remainingWithId) {
              setActiveSection(remainingWithId.id);
            } else {
              // No sections with IDs are intersecting
              setActiveSection(null);
            }
          }
        });
      },
      {
        rootMargin: "-50px 0px -90% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      colorObserver.observe(section);
      activeObserver.observe(section); // Observe ALL sections now
    });

    return () => {
      colorObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return (
    <header
      className={styles.nav}
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