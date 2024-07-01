import { useRef } from "react";
import { useQuoteContext } from "../../customHooks/useQuoteContext";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../gsap/baseAnimations";

const Calculation = () => {
  const {
    handleCalculateQuote,
    handleResetForm,
    distance,
    estimatedTravelTime,
  } = useQuoteContext();

  ///////////////////////////
  // GSAP Animations
  ///////////////////////////
  const container = useRef();
  useGSAP(
    () => {
      fadeInMultiple(".form-section");
    },
    { scope: container }
  );

  return (
    <div className="form-section flex flex-col justify-evenly h-full">
    <div>
      <h1 className="text-6xl text-center mb-12 mt-6 font-bold">
        Quote:{" "}
        <span className="text-green-600">
          $745 distance{distance} secs {estimatedTravelTime}
        </span>
      </h1>
      <p className="text-3xl my-6 mb-10 p-4 text-center">
        Contact us today to get a more detailed quote or book a move!
      </p>
    </div>
  
    <div className="w-full flex justify-around mb-8">
      <button
        onClick={() => handleResetForm()}
        className={`
          bg-blue-700 focus:ring-4 focus:ring-blue-300
          text-white mx-5 focus:outline-none font-medium rounded-lg text-2xl w-full md:min-w-64 sm:w-auto px-5 py-2.5 text-center
        `}
      >
        Reset Quote
      </button>
      <button
        onClick={() => handleCalculateQuote()}
        className={`
          bg-blue-700 focus:ring-4 focus:ring-blue-300
          text-white mx-5 focus:outline-none font-medium rounded-lg text-2xl w-full md:min-w-64 sm:w-auto px-5 py-2.5 text-center
        `}
      >
        Contact Now
      </button>
    </div>
  </div>
  
  );
};
export default Calculation;
