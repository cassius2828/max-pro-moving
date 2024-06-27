import { useQuoteContext } from "../../../customHooks/useQuoteContext";

const SubmitFormBtn = () => {
  const { handleSetProjectStartTime } = useQuoteContext();
  const handleSubmit = () => {
    handleSetProjectStartTime();
  };
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => handleSubmit()}
        type="submit"
        className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl w-full md:min-w-64 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  );
};
export default SubmitFormBtn;
