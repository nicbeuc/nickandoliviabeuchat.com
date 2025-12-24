import Image from "next/image";
import ourStoryImage from "@/images/our-story-image.jpg";
import styles from "@/styles/OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.ourStory} id="our-story" data-color-scheme="1" data-container="contained">
      <div className={styles.ourStoryInner} data-layout="split">
        <div className={styles.ourStoryContent}>
          <h2 className="fancy-heading section-heading">Our Story</h2>
          <p>Ut consequat proident eu est reprehenderit aute commodo voluptate cillum cillum nisi incididunt exercitation adipisicing. Eu do dolor et nulla ex et duis voluptate duis nisi ex est occaecat occaecat. Quis minim magna amet. Dolor exercitation ullamco officia pariatur consectetur non qui dolor ut dolore minim nulla amet nostrud labore.</p>
          <p>Veniam non id quis irure sunt fugiat deserunt dolor voluptate aliqua culpa est. In magna excepteur voluptate proident cillum incididunt commodo nostrud ad officia minim eu minim ea. Consectetur velit proident pariatur pariatur laborum veniam enim in deserunt. Dolor esse sint commodo enim aliqua mollit. Ad eiusmod mollit adipisicing adipisicing culpa aliqua sit minim ut qui.</p>
          <p>Deserunt ad aliqua Lorem duis anim. Officia proident consequat id et magna et ex dolor ex sint labore minim exercitation adipisicing. Minim nisi laboris excepteur ex eiusmod.</p>
        </div>
        <div className={styles.ourStoryImage}>
          <Image src={ourStoryImage} alt="Our Story" width={800} height={1200}/>
        </div>
      </div>
    </section>
  );
}