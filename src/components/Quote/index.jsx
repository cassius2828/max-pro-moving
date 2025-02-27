
import QuoteCalculator from "./QuoteCalculator";

import { useQuoteContext } from "../../customHooks/useQuoteContext";

const Quote = () => {
  const { formSteps } = useQuoteContext();

// sets form title based on progress
  return (
    <div className="mt-28">
      <h2 className="fade-in text-6xl text-center mb-10 quote-legend text-blue-800">
        {formSteps < 3
          ? "Start Your Quote"
          : formSteps === 3
          ? "Calculate Your Quote !"
          : formSteps === 4
          ? "Your Quote"
          : "Contact Us Today"}
      </h2>
      <QuoteCalculator />
    </div>
  );
};
export default Quote;
