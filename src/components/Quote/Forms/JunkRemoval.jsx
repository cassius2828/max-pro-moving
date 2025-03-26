import { useState } from "react";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";

const JunkRemoval = () => {
  const { handleUpdateForm } = useQuoteContext();
  const [willAddOn, setWillAddOn] = useState(false);
  const [addonDetails, setAddonDetails] = useState(""); // local temporary state for textarea

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      <div className="mt-6">
        <label
          htmlFor="stairs"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Add on Junk Removal?
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
              onChange={(e) => {
                handleUpdateForm(e.target);
                setWillAddOn((prev) => !prev);
                console.log(willAddOn)
              }}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label htmlFor="stairsNo" className="ml-2 text-sm text-gray-900">
              No
            </label>
          </div>
        </div>
        {willAddOn && (
          <>
            <textarea
              value={addonDetails}
              onChange={(e) => setAddonDetails(e.target.value)}
              placeholder="Enter additional details..."
              className="mt-4 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
            />
          </>
        )}
      </div>
      <BackAndNextBtns />
    </div>
  );
};

export default JunkRemoval;