import Image from "next/image";
import styles from "@/styles/Registry.module.css";
import registryImage from "@/images/registry-image.jpg";

export default function Registry() {
  return (
    <section id="registry" data-color-scheme="1" data-container="contained">
      <div className={styles.registryInner} data-layout="split">
        <div className={styles.registryImage}>
          <Image src={registryImage} alt="Registry" width={800} height={1200}/>
        </div>
        <div className={styles.registryContent}>
          <h2 className="fancy-heading section-heading">Registry</h2>
          <p>We have registered for a few items to help us start our new life together. If you would like to contribute, please visit our registry below. We&apos;ve also listed a few local charities near the bottom of the registry page that you&apos;re welcome to donate to if you&apos;d prefer to do so instead. We appreciate any and all contributions!</p>
          <a href="https://registry.theknot.com/olivia-orler-nick-beuchat-october-2026/74293170" target="_blank" rel="noopener noreferrer" className="link-underline">View Our Registry</a>
        </div>
      </div>
    </section>
  );
}