// react
import { FC, useEffect, useState } from "react";
// hooks
import { useMediaQuery } from "@/shared/libs/hooks/useMediaQuery";
// ui
import { Logo } from "@/shared/ui/Logo";
import { HeaderNavigationItems } from "../HeaderNavigationItems/HeaderNavigationItems";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
// styles
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

export const Header: FC = ({}) => {
  const media = useMediaQuery("(max-width: 610px)");

  const [isFixed, setIsFixed] = useState(false);

  const userPathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && userPathname === "/gallery") {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userPathname]);

  return (
    <div
      className={styles.Header}
      style={{ position: isFixed ? "fixed" : "relative", zIndex: 100 }}
    >
      <div className={styles.headerContent}>
        <Logo />
        {!media ? <HeaderNavigationItems /> : <BurgerMenu />}
      </div>
    </div>
  );
};
