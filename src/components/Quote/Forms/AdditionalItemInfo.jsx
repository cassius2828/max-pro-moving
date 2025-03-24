import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";

const AdditionalItemInfo = () => {
  const {
    handleUpdateForm,
    disassembly,
    specialtyItems,
    largeItems,
    junkRemoval,
    disassemblyDetails,
    specialtyItemsDetails,
    largeItemsDetails,
    junkRemovalDetails,
  } = useQuoteContext();
  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      {/* disassembly */}
      <div className="mt-6">
        <label
          htmlFor="disassembly"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Do you need us to disassemble or reassemble anything? (ex: Bed Frames,
          Couches, Shelves, Glass Furniture Pieces)
        </label>
        <div className="mt-3 flex items-center gap-x-6">
          <div className="flex items-center">
            <input
              id="disassemblyYes"
              name="disassembly"
              type="radio"
              value="yes"
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="specialityItems"
              className="ml-2 text-sm text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="disassemblyNo"
              name="disassembly"
              type="radio"
              value="no"
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="disassemblyNo"
              className="ml-2 text-sm text-gray-900"
            >
              No
            </label>
          </div>
        </div>
        {disassembly === "yes" && (
          <>
            <textarea
              value={disassemblyDetails}
              id="disassemblyDetails"
              name="disassemblyDetails"
              onChange={(e) => handleUpdateForm(e.target)}
              placeholder="Enter additional details..."
              className="mt-4 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
            />
          </>
        )}
      </div>
      {/* speciality items */}
      <div className="mt-6">
        <label
          htmlFor="stairs"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Specialty Items ? (ex: Pianos, Paintings, TVs)
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
      {/* large items */}
      <div className="mt-6">
        <label
          htmlFor="stairs"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Large / Heavy Items?
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
      {/* junk removal add on */}
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
                console.log(willAddOn);
              }}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label htmlFor="stairsNo" className="ml-2 text-sm text-gray-900">
              No
            </label>
          </div>
        </div>
      </div>
      <BackAndNextBtns />
    </div>
  );
};
export default AdditionalItemInfo;
