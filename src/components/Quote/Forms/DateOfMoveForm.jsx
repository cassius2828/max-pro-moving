import { useRef } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import SubmitFormBtn from "../QuoteBtns/SubmitFormBtn";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../../gsap/baseAnimations";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

///////////////////////////////////
// Date Of Move Form Component
///////////////////////////////////
export const DateOfMoveForm = () => {
  const container = useRef();
  const { handleUpdateForm } = useQuoteContext();

  /////////////////////////////////
  // GSAP animations for form sections
  /////////////////////////////////
  useGSAP(
    () => {
      fadeInMultiple(".form-section");
    },
    { scope: container }
  );

  return (
    <div ref={container} className="form-section flex flex-col justify-evenly h-full">
      
      {/* Input for project date */}
      <div className="my-12 mt-6">
        <label
          htmlFor="projectDate"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Project Date
        </label>
        <input

        onChange={(e) => handleUpdateForm(e.target)}  
        type="text"
          id="projectDate"
          name="projectDate"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter project date"
          required
        />
      </div>
      
      {/* Input for time of day */}
      <div className="my-12 mt-6">
        <label
          htmlFor="timeOfDay"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Time of Day
        </label>
        <input
          onChange={(e) => handleUpdateForm(e.target)}
          type="text"
          id="timeOfDay"
          name="timeOfDay"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter time of day"
          required
        />
      </div>
      
      <BackAndNextBtns />
      <SubmitFormBtn />
    </div>
  );
};
