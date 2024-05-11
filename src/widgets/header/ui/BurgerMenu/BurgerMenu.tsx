// next
import { usePathname, useRouter } from "next/navigation";
// react
import { useTranslation } from "react-i18next";
import { FC, useState } from "react";
// hooks
import { useRefBlockContext } from "@/shared/libs/hooks/useRefBlockContext";
import { useMediaQuery } from "@/shared/libs/hooks/useMediaQuery";
// helpers
import { scrollToRefElement } from "@/shared/libs/helpers/scrollToRefElement";
// widgets
import { LanguageSwitcher } from "@/widgets/languageSwitcher";
// ui
import { HeaderNavigationItem } from "../HeaderNavigationItem/HeaderNavigationItem";
// assets
import BurgerMenuIcon from "@/shared/libs/assets/burgerMenu.svg";
import CloseIcon from "@/shared/libs/assets/closeIcon.svg";
// styles
import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {}

export const BurgerMenu: FC<BurgerMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const media = useMediaQuery("(max-width: 435px)");

  const { aboutRef, contactRef, whatWeProvideRef } = useRefBlockContext();

  const { t } = useTranslation("header");

  const pathname = usePathname();

  const router = useRouter();

  const onScrollToAbout = () => {
    scrollToRefElement(aboutRef, pathname, router);
    setIsOpen(false);
  };

  const onScrollToContact = () => {
    scrollToRefElement(contactRef, pathname, router, true);
    setIsOpen(false);
  };

  const onScrollToWhatWeProvide = () => {
    scrollToRefElement(whatWeProvideRef, pathname, router);
    setIsOpen(false);
  };

  const onCloseClick = () => {
    setIsOpen(false);
  };

  const onGalleryClick = () => {
    onCloseClick();
    router.push("/gallery");
  };

  const onOpenClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles.BurgerMenu}>
        <BurgerMenuIcon onClick={onOpenClick} />
      </div>
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => e.stopPropagation()}>
          <div className={styles.closeIcon} onClick={onCloseClick}>
            <CloseIcon />
          </div>

          <div className={styles.content}>
            <HeaderNavigationItem
              text={t("about")}
              fontSize={media ? 30 : 50}
              to=""
              onClick={onScrollToAbout}
            />
            <HeaderNavigationItem
              text={t("whatWeProvide")}
              fontSize={media ? 30 : 50}
              to=""
              onClick={onScrollToWhatWeProvide}
            />
            <HeaderNavigationItem
              text={t("contact")}
              fontSize={media ? 30 : 50}
              to={""}
              onClick={onScrollToContact}
            />
            <HeaderNavigationItem
              fontSize={media ? 30 : 50}
              text={t("gallery")}
              to=""
              onClick={onGalleryClick}
            />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </>
  );
};
