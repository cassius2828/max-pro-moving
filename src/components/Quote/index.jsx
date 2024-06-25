import { useGSAP } from "@gsap/react";
import { fadeFromTop } from "../../gsap/baseAnimations";
import QuoteCalculator from "./QuoteCalculator";
import { useRef } from "react";

const Quote = () => {
  const container = useRef();
  useGSAP(
    () => {
      fadeFromTop(".quote-legend");
    },
    { scope: container }
  );

  return (
    <div ref={container} className="mt-28">
      <h2 className="text-6xl text-center mb-10 quote-legend">
        Start Your Quote
      </h2>
      <QuoteCalculator />
    </div>
  );
};
export default Quote;
