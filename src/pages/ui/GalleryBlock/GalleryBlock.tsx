// react
import { FC, useEffect, useState } from "react";
// widgets
import { GalleryImageList } from "@/widgets/galleryImage/ui/GalleryImageList/GalleryImageList";
// hooks
import { useMediaQuery } from "@/shared/libs/hooks/useMediaQuery";
// assets
import image1 from "./assets/images/1.jpg";
import image2 from "./assets/images/2.jpg";
import image3 from "./assets/images/3.jpg";
import image4 from "./assets/images/2.jpg";

// styles
import styles from "./GalleryBlock.module.scss";
import { Link } from "@/shared/ui/Link/Link";

interface GalleryBlockProps {
  images: string[];
}

export default function GalleryBlock({ images }: GalleryBlockProps) {
  const laptop = useMediaQuery("(max-width: 1440px)");

  const tablet = useMediaQuery("(max-width: 1024px)");

  const mobile = useMediaQuery("(max-width: 700px)");

  return (
    <div className={styles.GalleryBlock}>
      <div className={styles.content}>
        <div className={styles.topContainer}>
          <div className={styles.leftSide}>
            <div className={styles.title}>Part of Our Work</div>
            <h1 className={styles.subTitle}>Your Story, Our Ink</h1>
          </div>
          <div className={styles.rightSide}>
            <Link text="View All" to="/gallery" />
          </div>
        </div>
        <GalleryImageList
          shoudFlexContainer={true}
          height={mobile ? "auto" : ""}
          images={
            mobile
              ? images?.slice(0, 3)
              : tablet
              ? images?.slice(0, 6)
              : laptop
              ? images?.slice(0, 9)
              : images?.slice(0, 9)
          }
        />
      </div>
    </div>
  );
}
