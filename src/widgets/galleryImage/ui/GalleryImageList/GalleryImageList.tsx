// react
import { FC } from "react";
// ui
import { GalleryImage } from "../GalleryImage/GalleryImage";
// styles
import styles from "./GalleryImageList.module.scss";

interface GalleryImageListProps {
  images: string[];
  shoudFlexContainer?: boolean;
  height?: string;
}

export const GalleryImageList: FC<GalleryImageListProps> = ({
  images,
  shoudFlexContainer,
  height,
}) => {
  return (
    <div
      className={
        shoudFlexContainer
          ? styles.GalleryImageListFlex
          : styles.GalleryImageList
      }
    >
      {images?.map((image) => (
        <GalleryImage
          key={image}
          src={image}
          width={shoudFlexContainer ? "auto" : ""}
          height={height || ""}
        />
      ))}
    </div>
  );
};
