// react
import { FC } from "react";
// libs
import QRCode from "react-qr-code";
// styles
import styles from "./FooterQrCode.module.scss";
import { useMediaQuery } from "@/shared/libs/hooks/useMediaQuery";

interface FooterQrCodeProps {}

export const FooterQrCode: FC<FooterQrCodeProps> = ({}) => {
  const tablet = useMediaQuery("(max-width: 900px)");

  return !tablet ? (
    <div className={styles.qrCode}>
      <div className={styles.title}>Our Qr Code</div>
      <div className={styles.qrCodeContainer}>
        <QRCode value="https://mortatatoos.com" size={160} />
      </div>
    </div>
  ) : null;
};
