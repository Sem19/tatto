// ui
import { Link } from "@/shared/ui/Link/Link";
// ui
import MainBlock from "./ui/MainBlock/MainBlock";
import { AboutBlock } from "./ui/AboutBlock/AboutBlock";
import { GalleryBlock } from "./ui/GalleryBlock/GalleryBlock";
import { WhatWeProvideBlock } from "./ui/WhatWeProvideBlock/WhatWeProvideBlock";
import cloudinary from "@/shared/libs/utils/cloudinary";

export default function Home({ images }: any) {
  return (
    <>
      <MainBlock />
      <AboutBlock />
      <WhatWeProvideBlock />
      <GalleryBlock images={images} />
    </>
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
      max_results: 9,
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
