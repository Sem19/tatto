// react
import { FC, ReactNode, useRef } from "react";
// context
import { RefBlockContext } from "./RefBlockContext";

interface RefBlockProviderProps {
  children: ReactNode;
}

export const RefBlockProvider: FC<RefBlockProviderProps> = ({ children }) => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const whatWeProvideRef = useRef(null);

  return (
    <RefBlockContext.Provider
      value={{ aboutRef, contactRef, whatWeProvideRef }}
    >
      {children}
    </RefBlockContext.Provider>
  );
};
