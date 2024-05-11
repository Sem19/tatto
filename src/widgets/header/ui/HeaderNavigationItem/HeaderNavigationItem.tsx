// next
import Link from "next/link";
// react
import { FC } from "react";
// styles
import styles from "./HeaderNavigationItem.module.scss";

interface HeaderNavigationItemProps {
  text: string;
  to?: string;
  onClick?: () => void;
  fontSize?: number;
}

export const HeaderNavigationItem: FC<HeaderNavigationItemProps> = ({
  text,
  to,
  onClick,
  fontSize,
}) => {
  return !to ? (
    <div
      className={styles.HeaderNavigationItem}
      style={{ fontSize }}
      onClick={onClick}
    >
      {text}
    </div>
  ) : (
    <Link
      href={to}
      className={styles.HeaderNavigationItem}
      style={{ fontSize }}
    >
      {text}
    </Link>
  );
};
