// react
import { FC, ReactNode } from "react";
// styles
import styles from "./FooterInfoItem.module.scss";

interface FooterInfoItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FooterInfoItem: FC<FooterInfoItemProps> = ({
  description,
  icon,
  title,
}) => {
  return (
    <div className={styles.FooterInfoItem}>
      <div className={styles.leftSide}>{icon}</div>
      <div className={styles.rightSide}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
