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
            <a href="#our-story">Our Story</a>
          </li>
          <li>
            <a href="#venue">Venue</a>
          </li>
          <li>
            <a href="#lodging">Lodging</a>
          </li>
          <li>
            <a href="#rsvp">RSVP</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}