import { useRef } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import CalculateBtn from "../QuoteBtns/CalculateBtn";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../../gsap/baseAnimations";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

///////////////////////////////////
// Extra Details Component
///////////////////////////////////
export const ExtraDetails = () => {
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
    <div
    ref={container}
    className="form-section flex flex-col justify-evenly h-full"
  >
    {/* Radio buttons for stairs involved */}
    <div className="my-12 mt-6">
      <label
        htmlFor="stairs"
        className="block capitalize text-3xl font-medium text-blue-900 mb-8"
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
            onChange={(e) => handleUpdateForm(e.target)}
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="stairsYes"
            className="text-3xl font-medium text-gray-900 mb-8"
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
            onChange={(e) => handleUpdateForm(e.target)}
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="stairsNo"
            className="text-3xl font-medium text-gray-900 mb-8"
          >
            No
          </label>
        </div>
      </div>
    </div>
  
    {/* Input for listing large items */}
    <div className="my-12">
      <label
        htmlFor="listLargeItems"
        className="block capitalize text-3xl font-medium text-blue-900 mb-8"
      >
        List Large Items
      </label>
      <input
        type="textarea"
        id="listLargeItems"
        name="listLargeItems"
        onChange={(e) => handleUpdateForm(e.target)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="ex: pool table, tall dressers"
        required
      />
    </div>
  
    {/* Input for summary of the move */}
    <div className="my-12">
      <label
        htmlFor="summaryOfMove"
        className="block capitalize  text-3xl font-medium text-blue-900 mb-8"
      >
        Summary of Move
      </label>
      <input
        type="textarea"
        id="summaryOfMove"
        name="summaryOfMove"
        onChange={(e) => handleUpdateForm(e.target)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="details about the move"
        required
      />
    </div>
  
    <BackAndNextBtns />
    <CalculateBtn />
  </div>
  
  );
};
