import { useContext } from "react";
import { QuoteContext } from "../Context/QuoteContext";

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("Context was used outside of the Provider");
  }
  return context;
};
