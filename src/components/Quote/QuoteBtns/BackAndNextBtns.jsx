/* eslint-disable react/prop-types */
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

const BackAndNextBtns = ({ skipStep }) => {
  const { formSteps, handleFormStep, handleSetProjectStartTime } =
    useQuoteContext();
  const handleSubmit = () => {
    handleSetProjectStartTime();
  };
  return (
    <div
      className={`w-full flex ${
        formSteps === 1 ? "justify-end" : "justify-between "
      } mt-6`}
    >
      {/* Back button */}
      {formSteps !== 1 && (
        <button
          onClick={(e) => handleFormStep(e, "back", skipStep)}
          className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
        >
          Back
        </button>
      )}
      {formSteps > 6 ? (
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-600 font-semibold rounded-md text-sm px-4 py-2 max-w-96 sm:w-auto"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={(e) => handleFormStep(e, "next", skipStep)}
          className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
        >
          Next
        </button>
      )}
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
