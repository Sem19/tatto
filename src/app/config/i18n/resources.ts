// en
import { HeaderEN } from "@/widgets/header";
import MainBlockEN from "@/pages/ui/MainBlock/libs/translate/MainBlockEN.json";
// nl
import { HeaderNL } from "@/widgets/header";
import MainBlockNL from "@/pages/ui/MainBlock/libs/translate/MainBlockNL.json";

export const resources = {
  en: {
    header: HeaderEN,
    mainBlock: MainBlockEN,
  },
  nl: {
    header: HeaderNL,
    mainBlock: MainBlockNL,
  },
};

export const avaibleLanguages = Object.keys(resources);
