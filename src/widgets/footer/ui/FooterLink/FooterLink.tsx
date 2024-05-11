// react
import { FC } from "react";
// styles
import styles from "./FooterLink.module.scss";

interface FooterLinkProps {
  to: string;
  text: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ to, text }) => {
  return <div className={styles.FooterLink}>{text}</div>;
};
