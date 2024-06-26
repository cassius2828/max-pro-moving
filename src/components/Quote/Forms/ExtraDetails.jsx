import { useRef, useState } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import CalculateBtn from "../QuoteBtns/CalculateBtn";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../../gsap/baseAnimations";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

///////////////////////////////////
// Extra Details Component
///////////////////////////////////
export const ExtraDetails = () => {
  const [extraDetails, setExtraDetails] = useState({});
  const container = useRef();
  const { handleUpdateForm } = useQuoteContext();

  /////////////////////////////////
  // Handle change in form inputs
  /////////////////////////////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExtraDetails({ ...extraDetails, [name]: value });
    console.log(extraDetails);
  };

  /////////////////////////////////
  // Handle radio button change
  /////////////////////////////////
  const handleRadioChange = (event) => {
    // Add your logic here
  };

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
      
      {/* Radio buttons for stairs involved */}
      <div className="my-12 mt-6">
        <label
          htmlFor="stairs"
          className="block capitalize  text-3xl font-medium text-gray-900 mb-8 dark:text-white"
        >
          Stairs Involved
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              id="stairsYes"
              name="stairs"
              type="radio"
              value="yes"
              onChange={handleRadioChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="stairsYes"
              className="text-3xl font-medium text-gray-900 mb-8 dark:text-white"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="stairsNo"
              name="stairs"
              type="radio"
              value="no"
              onChange={handleRadioChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="stairsNo"
              className="text-3xl font-medium text-gray-900 mb-8 dark:text-white"
            >
              No
            </label>
          </div>
        </div>
      </div>
      
      {/* Input for listing large items */}
      <div className="my-12">
        <label
          htmlFor="largeItems"
          className="block capitalize  text-3xl font-medium text-gray-900 mb-8 dark:text-white"
        >
          List Large Items
        </label>
        <input
          type="textarea"
          id="largeItems"
          name="largeItems"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ex: pool table, tall dressers"
          required
        />
      </div>
      
      {/* Input for summary of the move */}
      <div className="my-12">
        <label
          htmlFor="moveSummary"
          className="block capitalize mb-2 text-3xl font-medium text-gray-900 mb-8 dark:text-white"
        >
          Summary of Move
        </label>
        <input
          type="textarea"
          id="moveSummary"
          name="moveSummary"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="details about the move"
          required
        />
      </div>
      
      <BackAndNextBtns />
      <CalculateBtn />
    </div>
  );
};
