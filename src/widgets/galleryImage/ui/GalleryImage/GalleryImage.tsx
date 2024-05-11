// next
import Image from "next/image";
// react
import { FC } from "react";
// styles
import styles from "./GalleryImage.module.scss";
import { useMediaQuery } from "@/shared/libs/hooks/useMediaQuery";

interface GalleryImageProps {
  src: string;
  width: string;
  height: string;
}

export const GalleryImage: FC<GalleryImageProps> = ({ src, width, height }) => {
  const media = useMediaQuery("(max-width: 500px)");

  return (
    <Image
      className={styles.GalleryImage}
      width={320}
      height={450}
      style={{
        width: media ? "100%" : "auto",
        height: height,
      }}
      src={src}
      alt="image"
    />
  );
};
