// react
import { FC } from "react";
// hooks
import { useRefBlockContext } from "@/shared/libs/hooks/useRefBlockContext";
// styles
import styles from "./WhatWeProvideBlock.module.scss";

interface WhatWeProvideBlockProps {}

export const WhatWeProvideBlock: FC<WhatWeProvideBlockProps> = ({}) => {
  const { whatWeProvideRef } = useRefBlockContext();

  return (
    <div className={styles.WhatWeProvideBlock} ref={whatWeProvideRef}>
      <div className={styles.textContent}>
        <div className={styles.title}>What We Provide</div>
        <div className={styles.paragraph}>
          At Mortatoos, we&rsquo;re dedicated to creating meaningful designs
          that capture your unique essence, utilizing premium quality inks to
          ensure vivid, enduring results. Whether inspired by your vision or
          curated to embody your personality, each design evolves into a
          timeless masterpiece. Step into our studio, where every needle stroke
          breathes life into your ideas, leaving an everlasting imprint on both
          your skin and soul.
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          src="https://res.cloudinary.com/drbhm73so/video/upload/v1708466179/video/morTatoosVideo.mp4"
        />
      </div>
    </div>
  );
};
