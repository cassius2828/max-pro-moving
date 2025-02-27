
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import CalculateBtn from "../QuoteBtns/CalculateBtn";


import { useQuoteContext } from "../../../customHooks/useQuoteContext";

///////////////////////////////////
// Extra Details Component
///////////////////////////////////
export const ExtraDetails = () => {

  const { handleUpdateForm } = useQuoteContext();




  return (
    <div
 
    className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8"
  >
    {/* Radio buttons for stairs involved */}
    <div className="mt-6">
      <label htmlFor="stairs" className="block text-sm/6 font-medium text-gray-900">
        Stairs Involved
      </label>
      <div className="mt-3 flex items-center gap-x-6">
        <div className="flex items-center">
          <input
            id="stairsYes"
            name="stairs"
            type="radio"
            value="yes"
            onChange={(e) => handleUpdateForm(e.target)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
          />
          <label htmlFor="stairsYes" className="ml-2 text-sm text-gray-900">
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
            className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
          />
          <label htmlFor="stairsNo" className="ml-2 text-sm text-gray-900">
            No
          </label>
        </div>
      </div>
    </div>
  
    {/* Input for listing large items */}
    <div className="mt-6">
      <label htmlFor="listLargeItems" className="block text-sm/6 font-medium text-gray-900">
        List Large Items
      </label>
      <textarea
        id="listLargeItems"
        name="listLargeItems"
        rows="3"
        onChange={(e) => handleUpdateForm(e.target)}
        className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
        placeholder="Ex: pool table, tall dressers"
        required
      ></textarea>
    </div>
  
    {/* Input for summary of the move */}
    <div className="mt-6">
      <label htmlFor="summaryOfMove" className="block text-sm/6 font-medium text-gray-900">
        Summary of Move
      </label>
      <textarea
        id="summaryOfMove"
        name="summaryOfMove"
        rows="3"
        onChange={(e) => handleUpdateForm(e.target)}
        className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
        placeholder="Details about the move"
        required
      ></textarea>
    </div>
  
    {/* Buttons */}
    <div className="mt-6 border-t border-gray-900/10 pt-4 flex justify-end gap-x-6">
      <BackAndNextBtns />
      <CalculateBtn />
    </div>
  </div>
  
  );
};
