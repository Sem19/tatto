// react
import { FC } from "react";
// libs
import { CldUploadButton } from "next-cloudinary";
// styles
import styles from "./UploadButton.module.scss";

interface UploadButtonProps {}

export const UploadButton: FC<UploadButtonProps> = ({}) => {
  return (
    <CldUploadButton className={styles.UploadButton}>Upload</CldUploadButton>
  );
};
