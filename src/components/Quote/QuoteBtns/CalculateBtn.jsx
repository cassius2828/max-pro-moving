import { useQuoteContext } from "../../../customHooks/useQuoteContext";

const CalculateBtn = () => {
  const { handleCalculateQuote, startingLocation, stop1, stop2 } =
    useQuoteContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCalculateQuote(startingLocation, stop1, stop2);
  };
  return (
    <div className="w-full flex justify-center mt-6">
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-600 font-semibold rounded-md text-sm px-4 py-2 max-w-96 sm:w-auto"
      >
        Calculate
      </button>
    </div>
  );
};
export default CalculateBtn;
