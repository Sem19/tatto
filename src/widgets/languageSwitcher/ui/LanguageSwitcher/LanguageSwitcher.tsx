import { useTranslation } from "react-i18next";
// react
import { FC } from "react";
// styles
import "./LanguageSwitcher.scss";

interface LanguageSwitcherProps {}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({}) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <div
        className={`language-switcher__option ${
          i18n.language === "en" ? "active" : ""
        }`}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </div>
      <div className="language-switcher__divider">|</div>
      <div
        className={`language-switcher__option ${
          i18n.language === "nl" ? "active" : ""
        }`}
        onClick={() => handleChangeLanguage("nl")}
      >
        NL
      </div>
    </div>
  );
};
