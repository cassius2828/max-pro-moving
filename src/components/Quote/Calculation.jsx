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
        {/* <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-6">
          Quote:{" "}
          <span className="text-green-600">
            $745 distance {distance} secs {estimatedTravelTime}
          </span>
        </h1> */}
        <p className="text-base text-gray-700 text-center">
          Your file has been uploaded for your Project Coordinator to review!
          Text our office with any questions/comments at (619) 905-1009
        </p>
      </div>

      <div className="w-full flex justify-center gap-x-6 mt-6">
        <button
          onClick={() => handleResetForm()}
          className="bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-600 text-white font-semibold rounded-md text-sm px-4 py-2 min-w-[120px] sm:w-auto"
        >
          Reset Quote
        </button>
        <button
          onClick={() => handleCalculateQuote()}
          className="bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-600 text-white font-semibold rounded-md text-sm px-4 py-2 min-w-[120px] sm:w-auto"
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};
export default Calculation;
