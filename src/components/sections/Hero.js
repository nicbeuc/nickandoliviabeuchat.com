import Image from "next/image";
import Button from "@/components/ui/Button";
import heroImage from "@/images/hero-image.jpg";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={heroImage}
          alt="Nick and Olivia"
          priority
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span>Nick</span><span className={styles.ampersand}>&amp;</span><span>Olivia</span>
          </h1>
          <p>October 17, 2026</p>
          <p>Knoxville, TN</p>
        </div>
        <Button href="#rsvp">RSVP</Button>
      </div>
    </section>
  );
}