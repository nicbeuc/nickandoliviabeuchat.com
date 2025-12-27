import Image from "next/image";
import ourStoryImage from "@/images/our-story-image.jpg";
import styles from "@/styles/OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.ourStory} id="our-story" data-color-scheme="1" data-container="contained">
      <div className={styles.ourStoryInner} data-layout="split">
        <div className={styles.ourStoryContent}>
          <h2 className="fancy-heading section-heading">Our Story</h2>
          <p>With the help of their mutual friend Bridget playing cupid, Nick and Olivia met in 2019 while attending the University of Tennessee.</p>
          <p>Among many other things, they bonded over their shared love of animals, slice-of-life Japanese reality shows, and favorite local coffee shops. This bond quickly grew into a deep friendship, and eventually an unbreakable love, making the couple inseparable from that point on.</p>
          <p>Though the relationship was tested early on by complications caused by the global pandemic, ultimately it only brought them closer together. Six years on, they now live happily together with their four-legged children, Griffin, Lacey, Hank and Chicken.</p>
          <p>After their enagement in 2025, Nick and Olivia are excited to invite you to share in their joy as they embark on the next chapter of their lives together.</p>
        </div>
        <div className={styles.ourStoryImage}>
          <Image src={ourStoryImage} alt="Nick and Olivia" width={800} height={1200}/>
        </div>
      </div>
    </section>
  );
}