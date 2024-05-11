// react
import { useTranslation } from "react-i18next";
// ui
import { Link } from "@/shared/ui/Link/Link";
// styles
import styles from "./MainBlock.module.scss";

export default function MainBlock() {
  const { t } = useTranslation("mainBlock");

  return (
    <div className={styles.MainBlock}>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{t("title")}</p>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>{t("description")}</p>
        </div>
        <div className={styles.linkContainer}>
          <Link text={t("buttonText")} to="/gallery" />
        </div>
      </div>
    </div>
  );
}
