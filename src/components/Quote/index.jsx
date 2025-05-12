import QuoteCalculator from "./QuoteCalculator";

import { useQuoteContext } from "../../customHooks/useQuoteContext";
import QuoteModal from "../Modals/QuoteModal";


const Quote = () => {
  const { formSteps, handleResetQuoteAmount, quoteAmount } = useQuoteContext();

  // sets form title based on progress
  return (
    <section id="quote-form" className="relative mt-12 mb-24">
      <h2 className="fade-in text-6xl text-center mb-10 quote-legend text-gray-800">
        {formSteps < 3
          ? "Click to Receive a Detailed Quote"
          : formSteps === 3
          ? "Calculate Your Quote !"
          : formSteps === 4
          ? "Your Quote"
          : "Contact Us Today"}
      </h2>
      <QuoteCalculator />
      {quoteAmount > 0 && <QuoteModal onClose={handleResetQuoteAmount} />}
    </section>
  );
};
export default Quote;
