import { useQuoteContext } from "../../../customHooks/useQuoteContext";

const CalculateBtn = () => {
  const { handleCalculateQuote, startingLocation, stop1, stop2 } =
    useQuoteContext();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCalculateQuote(startingLocation, stop1, stop2);
  };
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl w-full md:min-w-64 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Calculate
      </button>
    </div>
  );
};
export default CalculateBtn;
