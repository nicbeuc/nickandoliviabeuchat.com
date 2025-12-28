import Image from "next/image";
import rsvpImage from "@/images/rsvp-image.jpg";
import RSVPForm from "@/components/ui/RSVPForm";
import styles from "@/styles/RSVP.module.css";

export default function RSVP() {
  return (
    <section className={styles.rsvp} id="rsvp" data-color-scheme="2" data-container="contained">
      <div className={styles.rsvpInner} data-layout="split">
        <div className={styles.rsvpContent}>
          <h2 className="fancy-heading section-heading">Rsvp</h2>
          <p className={styles.rsvpIntro}>Please fill out the form with your information below to RSVP. We request that you RSVP no later than September 1, 2026.</p>
          <div className="dotted-divider"></div>
          <RSVPForm />
        </div>
        <div className={styles.rsvpImage}>
          <Image src={rsvpImage} alt="Nick and Olivia" width={800} height={1200}/>
        </div>
      </div>
    </section>
  );
}
