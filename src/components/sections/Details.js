import Image from "next/image";
import venueImage from "@/images/venue-image.jpg";
import styles from "@/styles/Details.module.css";

export default function Details() {
  return (
    <section className={styles.details} id="details" data-color-scheme="3" data-container="contained">
      <div className={styles.detailsInner} data-layout="split">
        <div className={styles.detailsImage}>
          <Image src={venueImage} alt="Riverview Family Farm" width={800} height={1200}/>
        </div>
        <div className={styles.detailsContent}>
          <h2 className="fancy-heading section-heading">Day-of Details</h2>
          <div className={styles.detailsInfo}>
            <dl>
              <dt>Venue</dt>
              <dd>
                <a href="https://www.google.com/maps/place/RiverView+Family+Farm+Market%2FLafayette%E2%80%99s+Place/@35.8300352,-84.1522982,16z/data=!4m6!3m5!1s0x885c2945ac410131:0xa3922dc658d1336a!8m2!3d35.8300352!4d-84.1497233!16s%2Fg%2F11pkp81k2z?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="link-underline">Riverview Family Farm</a>
                <span>12131 Prater Ln, Knoxville, TN 37922</span>
              </dd>
              <dt>Date</dt>
              <dd>October 17, 2026</dd>
              <dt>Ceremony</dt>
              <dd>4:00 PM EST</dd>
              <dt>Reception</dt>
              <dd>5:30 PM EST</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}