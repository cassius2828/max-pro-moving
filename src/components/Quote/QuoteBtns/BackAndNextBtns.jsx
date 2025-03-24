import { useQuoteContext } from "../../../customHooks/useQuoteContext";

const BackAndNextBtns = () => {
  const { formSteps, handleFormStep } = useQuoteContext();

  return (
    <div
      className={`w-full flex ${
        formSteps === 1 ? "justify-end" : "justify-between "
      } mt-6`}
    >
      {/* Back button */}
      {formSteps !== 1 && (
        <button
          onClick={(e) => handleFormStep(e, "back")}
          className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
        >
          Back
        </button>
      )}

      {/* Next button */}
      <button
        onClick={(e) => handleFormStep(e, "next")}
        className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
      >
        Next
      </button>
    </div>
  );
};
export default BackAndNextBtns;

/**
 *       
 * <button
        onClick={(e) => handleFormStep(e, "back")}
        className={`${
          formSteps === 1
            ? "opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400"
            : "bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600"
        } text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96`}
        disabled={formSteps === 1}
      >
        Back
      </button>

   <button
    onClick={(e) => handleFormStep(e, "next")}
    className={`${
      formSteps > 5 || formSteps === 3
        ? "opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400"
        : "bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600"
    } text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96`}
    disabled={formSteps > 5 || formSteps === 3}
  >
    Next
  </button>
 */
