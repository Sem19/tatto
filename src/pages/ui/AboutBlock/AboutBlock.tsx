// next
import Image from "next/image";
// hooks
import { useRefBlockContext } from "@/shared/libs/hooks/useRefBlockContext";
// assets
import imageBack from "@/shared/libs/assets/shop.webp";
// styles
import styles from "./AboutBlock.module.scss";

export default function AboutBlock({}) {
  const { aboutRef } = useRefBlockContext();

  return (
    <div className={styles.AboutBlock} ref={aboutRef}>
      <div className={styles.leftSide}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>About</div>
            <h1 className={styles.subtitle}>Mor Tatoos</h1>
          </div>
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>
              Welcome to Mortatoos – a corner of tattoo art in the heart of
              Enschede, Netherlands. We offer not just tattoos, but stories
              expressed in ink. Visit us at De Reulver 100A and discover the
              world of individual style.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.imagesContainer}>
          <Image src={imageBack} className={styles.imageBack} alt="tattoo" />
        </div>
      </div>
    </div>
  );
}
