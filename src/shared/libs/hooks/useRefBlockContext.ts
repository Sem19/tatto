// react
import { useContext } from "react";
// context
import { RefBlockContext } from "@/app/providers/context/RefBlock/RefBlockContext";

export const useRefBlockContext = () => {
  return useContext(RefBlockContext);
};
