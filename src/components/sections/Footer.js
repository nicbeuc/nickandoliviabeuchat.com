import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import footerImage from "@/images/footer-image.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer} data-container="full-width">
      <div className={styles.footerBg}>
        <Image src={footerImage} alt="" width={1920} height={1080} className={styles.footerImage} />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <h2>Thank you!</h2>
          <p>We hope to see you on our special day.</p>
        </div>
      </div>
      <small className={styles.footerCopyright}>© 2026 Nick and Olivia Beuchat. All rights reserved. Website by Nick.</small>
    </footer>
  );
}