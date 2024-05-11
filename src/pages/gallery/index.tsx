import React from "react";
import { GalleryImageList } from "@/widgets/galleryImage/ui/GalleryImageList/GalleryImageList";
import { useRefBlockContext } from "@/shared/libs/hooks/useRefBlockContext";
import { v2 as cloudinary } from "cloudinary";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@/shared/libs/hooks/useMediaQuery";

export default function Gallery({ images }: any) {
  const mobile = useMediaQuery("(max-width: 610px)");

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.title}>Welcome to Our Gallery</div>
      <GalleryImageList
        images={images}
        shoudFlexContainer={true}
        height={mobile ? "auto" : ""}
      />
    </div>
  );
}

export async function getServerSideProps() {
  cloudinary.config({
    cloud_name: "drbhm73so",
    api_key: "952862738488828",
    api_secret: "qG7JHovoqHlUgV7gbAp1YZODE7A",
  });

  try {
    const res = await cloudinary.api.resources({
      type: "upload",
      prefix: "tattos/",
      max_results: 15,
    });

    const imageUrl = res.resources.map((resource: any) => resource.secure_url);

    return {
      props: {
        images: imageUrl,
      },
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        images: [],
      },
    };
  }
}
