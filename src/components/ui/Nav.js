"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/Nav.module.css";

export default function Nav() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the hero section (100vh)
      setIsPastHero(window.scrollY > (window.innerHeight - 50));
    };

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${isPastHero ? styles.pastHero : ""}`}>
      <nav className={styles.navWrapper}>
        <ul>
          <li>
            <a href="#our-story"><span>Our Story</span></a>
          </li>
          <li>
            <a href="#details"><span>Details</span></a>
          </li>
          <li>
            <a href="#lodging"><span>Lodging</span></a>
          </li>
          <li>
            <a href="#rsvp"><span>RSVP</span></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}