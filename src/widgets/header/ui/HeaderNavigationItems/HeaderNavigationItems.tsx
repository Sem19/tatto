// next
import { usePathname, useRouter } from "next/navigation";
// react
import { FC } from "react";
// hooks
import { useRefBlockContext } from "@/shared/libs/hooks/useRefBlockContext";
// helpers
import { scrollToRefElement } from "@/shared/libs/helpers/scrollToRefElement";
// widgets
import { LanguageSwitcher } from "@/widgets/languageSwitcher";
// ui
import { HeaderNavigationItem } from "../HeaderNavigationItem/HeaderNavigationItem";
// styles
import styles from "./HeaderNavigationItems.module.scss";
import { useTranslation } from "react-i18next";

export const HeaderNavigationItems: FC = ({}) => {
  const { aboutRef, contactRef, whatWeProvideRef } = useRefBlockContext();

  const { t } = useTranslation("header");

  const pathname = usePathname();

  const router = useRouter();

  const onScrollToAbout = () => {
    scrollToRefElement(aboutRef, pathname, router);
  };

  const onScrollToContact = () => {
    scrollToRefElement(contactRef, pathname, router, true);
  };

  const onScrollToWhatWeProvide = () => {
    scrollToRefElement(whatWeProvideRef, pathname, router);
  };

  return (
    <div className={styles.HeaderNavigationItems}>
      <HeaderNavigationItem text={t("about")} to="" onClick={onScrollToAbout} />
      <HeaderNavigationItem
        text={t("whatWeProvide")}
        to=""
        onClick={onScrollToWhatWeProvide}
      />
      <HeaderNavigationItem
        text={t("contact")}
        to={""}
        onClick={onScrollToContact}
      />
      <HeaderNavigationItem text={t("gallery")} to="/gallery" />

      <LanguageSwitcher />
    </div>
  );
};
