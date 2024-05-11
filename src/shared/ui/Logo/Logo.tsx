// next
import Link from "next/link";
// react
import { FC } from "react";
// assests
import AppLogo from "@/shared/libs/assets/logo.svg";

interface LogoProps {
  size?: number;
}

export const Logo: FC<LogoProps> = ({ size = 230 }) => {
  const onScrollToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href={"/"}>
      <AppLogo
        onClick={onScrollToTopClick}
        style={{ width: size, height: "auto", cursor: "pointer" }}
      />
    </Link>
  );
};
