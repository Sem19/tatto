// next
import { usePathname, useRouter } from "next/navigation";
// react
import { FC } from "react";
// libs
import QRCode from "react-qr-code";
// hooks
import { useRefBlockContext } from "@/shared/libs/hooks/useRefBlockContext";
// assets
import TagIcon from "../../libs/assets/svg/tag.svg";
import PhoneIcon from "../../libs/assets/svg/phone.svg";
import MailIcon from "../../libs/assets/svg/mail.svg";
import FacebookIcon from "../../libs/assets/svg/icons8-facebook.svg";
import InstagramIcon from "../../libs/assets/svg/icons8-instagram.svg";
import TiktokIcon from "../../libs/assets/svg/icons8-tiktok.svg";
// ui
import { HeaderNavigationItem } from "@/widgets/header/ui/HeaderNavigationItem/HeaderNavigationItem";
import { FooterInfoItem } from "../FooterInfoItem/FooterInfoItem";
import { FooterIconLink } from "../FooterIconLink/FooterIconLink";
import { Logo } from "@/shared/ui/Logo";
// styles
import styles from "./Footer.module.scss";
import { scrollToRefElement } from "@/shared/libs/helpers/scrollToRefElement";
import { FooterQrCode } from "../FooterQrCode/FooterQrCode";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  const { contactRef, aboutRef, whatWeProvideRef } = useRefBlockContext();

  const pathname = usePathname();

  const router = useRouter();

  const onScrollToAbout = () => {
    scrollToRefElement(aboutRef, pathname, router);
  };

  const onScrollToWhatWeProvide = () => {
    scrollToRefElement(whatWeProvideRef, pathname, router);
  };

  return (
    <>
      <footer className={styles.Footer} ref={contactRef}>
        <div className={styles.topContainer}>
          <FooterInfoItem
            icon={<TagIcon className={styles.icon} />}
            title={"Find us"}
            description={"NL, Enschede, De Reulver 100A"}
          />

          <FooterInfoItem
            icon={<PhoneIcon className={styles.icon} />}
            title={"Call us"}
            description={"+31 0630922196"}
          />
          <FooterInfoItem
            icon={<MailIcon className={styles.icon} />}
            title={"Mail us"}
            description={"moris-mor@hotmail.com"}
          />
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.siteDescription}>
            <div className={styles.logoContainer}>
              <Logo size={250} />
              <div className={styles.logoDescription}>
                Stay updated on our social media for inspiration and news.
                Follow us to discover more about Mortatoos.
              </div>
            </div>
            <div className={styles.socialsContainer}>
              <div className={styles.socialTitle}>Follow us</div>
              <div className={styles.socialsButtons}>
                <FooterIconLink
                  icon={<FacebookIcon WhatWeProvideBlock/>}
                  to="https://m.facebook.com/Mortattoos"
                  style={{ marginLeft: "-11px" }}
                />
                <FooterIconLink
                  icon={<InstagramIcon />}
                  to="https://www.instagram.com/mortattoos/"
                />
                <FooterIconLink
                  icon={<TiktokIcon />}
                  to="https://www.tiktok.com/@mortattoos"
                />
              </div>
            </div>
          </div>
          <div className={styles.quickLinks}>
            <div className={styles.title}>Quick Links</div>
            <div className={styles.linksContainer}>
              <HeaderNavigationItem
                text="About Us"
                to=""
                onClick={onScrollToAbout}
              />
              <HeaderNavigationItem
                text="What We Provide"
                to=""
                onClick={onScrollToWhatWeProvide}
              />
              <HeaderNavigationItem text="Gallery" to="/gallery" />
            </div>
          </div>
          <FooterQrCode />
        </div>
      </footer>
      <div className={styles.bottomContainer}>
        Copyright © 2024, All Right Reserved
      </div>
    </>
  );
};
