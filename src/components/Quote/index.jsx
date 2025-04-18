import QuoteCalculator from "./QuoteCalculator";

import { useQuoteContext } from "../../customHooks/useQuoteContext";
import QuoteModal from "../Modals/QuoteModal";
import { useEffect } from "react";

const Quote = () => {
  const { formSteps, handleResetQuoteAmount, quoteAmount } = useQuoteContext();
useEffect(() => {
console.log(quoteAmount)
console.log(handleResetQuoteAmount)
},[quoteAmount])
  // sets form title based on progress
  return (
    <section className="relative my-40">
      <h2 className="fade-in text-6xl text-center mb-10 quote-legend text-blue-800">
        {formSteps < 3
          ? "Calculate Your Budget"
          : formSteps === 3
          ? "Calculate Your Quote !"
          : formSteps === 4
          ? "Your Quote"
          : "Contact Us Today"}
      </h2>
      <QuoteCalculator />
      {quoteAmount && <QuoteModal onClose={handleResetQuoteAmount} />}
    </section>
  );
};
export default Quote;
