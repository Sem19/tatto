import { MutableRefObject, createContext } from "react";

interface RefBlockContextValue {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
  whatWeProvideRef: MutableRefObject<HTMLDivElement | null>;
}

export const RefBlockContext = createContext({} as RefBlockContextValue);
