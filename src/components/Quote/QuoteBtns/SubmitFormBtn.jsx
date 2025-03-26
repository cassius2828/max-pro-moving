import { useQuoteContext } from "../../../customHooks/useQuoteContext";

const SubmitFormBtn = () => {
  const { handleSetProjectStartTime, handleFormStep } = useQuoteContext();
  const handleSubmit = () => {
    handleSetProjectStartTime();
  };
  return (
    <div className="w-full flex justify-between gap-12 mt-4">
            {/* Back button */}
            <button
        onClick={(e) => handleFormStep(e, "back")}
        className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
      >
        Back
      </button>
      <button
        onClick={() => handleSubmit()}
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-600 font-semibold rounded-md text-sm px-4 py-2 max-w-96 sm:w-auto"
      >
        Submit
      </button>
    </div>
  );
};
export default SubmitFormBtn;
