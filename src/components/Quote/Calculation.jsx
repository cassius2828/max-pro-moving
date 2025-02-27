import { useQuoteContext } from "../../customHooks/useQuoteContext";

const Calculation = () => {
  const {
    handleCalculateQuote,
    handleResetForm,
    distance,
    estimatedTravelTime,
  } = useQuoteContext();

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-6">
          Quote:{" "}
          <span className="text-green-600">
            $745 distance {distance} secs {estimatedTravelTime}
          </span>
        </h1>
        <p className="text-base text-gray-700 text-center">
          Contact us today to get a more detailed quote or book a move!
        </p>
      </div>

      <div className="w-full flex justify-center gap-x-6 mt-6">
        <button
          onClick={() => handleResetForm()}
          className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 min-w-[120px] sm:w-auto"
        >
          Reset Quote
        </button>
        <button
          onClick={() => handleCalculateQuote()}
          className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 min-w-[120px] sm:w-auto"
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};
export default Calculation;
