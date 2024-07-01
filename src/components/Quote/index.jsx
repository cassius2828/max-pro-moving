import { useGSAP } from "@gsap/react";
import { fadeFromTop } from "../../gsap/baseAnimations";
import QuoteCalculator from "./QuoteCalculator";
import { useRef } from "react";
import { useQuoteContext } from "../../customHooks/useQuoteContext";

const Quote = () => {
  const { formSteps } = useQuoteContext();

  ///////////////////////////
  // GSAP Animations
  ///////////////////////////
  const container = useRef();
  useGSAP(
    () => {
      fadeFromTop(".quote-legend");
    },
    { scope: container }
  );
// sets form title based on progress
  return (
    <div ref={container} className="mt-28">
      <h2 className="text-6xl text-center mb-10 quote-legend text-blue-800">
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
