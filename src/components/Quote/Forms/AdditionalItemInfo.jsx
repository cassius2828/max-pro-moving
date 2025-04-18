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
              checked={disassembly === "yes"}
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="disassemblyYes"
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
              checked={disassembly === "no"}
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
          <textarea
            value={disassemblyDetails}
            id="disassemblyDetails"
            name="disassemblyDetails"
            onChange={(e) => handleUpdateForm(e.target)}
            placeholder="Enter additional details..."
            className="mt-4 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
          />
        )}
      </div>

      {/* specialty items */}
      <div className="mt-6">
        <label
          htmlFor="specialtyItems"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Specialty Items? (ex: Pianos, Paintings, TVs)
        </label>
        <div className="mt-3 flex items-center gap-x-6">
          <div className="flex items-center">
            <input
              id="specialtyItemsYes"
              name="specialtyItems"
              type="radio"
              value="yes"
              checked={specialtyItems === "yes"}
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="specialtyItemsYes"
              className="ml-2 text-sm text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="specialtyItemsNo"
              name="specialtyItems"
              type="radio"
              value="no"
              checked={specialtyItems === "no"}
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="specialtyItemsNo"
              className="ml-2 text-sm text-gray-900"
            >
              No
            </label>
          </div>
        </div>
        {specialtyItems === "yes" && (
          <textarea
            value={specialtyItemsDetails}
            id="specialtyItemsDetails"
            name="specialtyItemsDetails"
            onChange={(e) => handleUpdateForm(e.target)}
            placeholder="Enter additional details..."
            className="mt-4 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
          />
        )}
      </div>

      {/* large items */}
      <div className="mt-6">
        <label
          htmlFor="largeItems"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Large / Heavy Items?
        </label>
        <div className="mt-3 flex items-center gap-x-6">
          <div className="flex items-center">
            <input
              id="largeItemsYes"
              name="largeItems"
              type="radio"
              value="yes"
              checked={largeItems === "yes"}
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="largeItemsYes"
              className="ml-2 text-sm text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="largeItemsNo"
              name="largeItems"
              type="radio"
              value="no"
              checked={largeItems === "no"}
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="largeItemsNo"
              className="ml-2 text-sm text-gray-900"
            >
              No
            </label>
          </div>
        </div>
        {largeItems === "yes" && (
          <textarea
            value={largeItemsDetails}
            id="largeItemsDetails"
            name="largeItemsDetails"
            onChange={(e) => handleUpdateForm(e.target)}
            placeholder="Enter additional details..."
            className="mt-4 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
          />
        )}
      </div>

      {/* junk removal */}
      <div className="mt-6">
        <label
          htmlFor="junkRemoval"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Add on Junk Removal?
        </label>
        <div className="mt-3 flex items-center gap-x-6">
          <div className="flex items-center">
            <input
              id="junkRemovalYes"
              name="junkRemoval"
              type="radio"
              value="yes"
              checked={junkRemoval === "yes"}
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="junkRemovalYes"
              className="ml-2 text-sm text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="junkRemovalNo"
              name="junkRemoval"
              type="radio"
              value="no"
              checked={junkRemoval === "no"}
              onChange={(e) => handleUpdateForm(e.target)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="junkRemovalNo"
              className="ml-2 text-sm text-gray-900"
            >
              No
            </label>
          </div>
        </div>
        {junkRemoval === "yes" && (
          <textarea
            value={junkRemovalDetails}
            id="junkRemovalDetails"
            name="junkRemovalDetails"
            onChange={(e) => handleUpdateForm(e.target)}
            placeholder="Enter additional details..."
            className="mt-4 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
          />
        )}
      </div>

      <BackAndNextBtns />
    </div>
  );
};

export default AdditionalItemInfo;
