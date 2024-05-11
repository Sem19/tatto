import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const scrollToRefElement = (
  ref: any,
  pathname: string | null,
  router: AppRouterInstance,
  shoudScrollOnThisPage?: boolean
) => {
  if (
    (ref.current && pathname === "/") ||
    (ref.current && shoudScrollOnThisPage)
  ) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  } else {
    router.push("/");
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
};
