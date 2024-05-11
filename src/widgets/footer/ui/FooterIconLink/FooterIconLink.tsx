// react
import { CSSProperties, FC, ReactNode } from "react";
// styles
import styles from "./FooterIconLink.module.scss";

interface FooterIconLinkProps {
  to?: string;
  icon: ReactNode;
  style?: CSSProperties;
}

export const FooterIconLink: FC<FooterIconLinkProps> = ({
  icon,
  to,
  style,
}) => {
  return (
    <a href={to} className={styles.FooterIconLink} style={style}>
      {icon}
    </a>
  );
};
