/* eslint-disable react/prop-types */
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

const BackAndNextBtns = ({ skipStep, skipPastDirection }) => {
  const { formSteps, handleFormStep, handleSetProjectStartTime } =
    useQuoteContext();
  const handleSubmit = () => {
    handleSetProjectStartTime();
  };
  const scrollToQuoteForm = () => {
    console.log('running')
    const element = document.getElementById("quote-form");
    console.log(element,'\n\n\n')
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      console.log(element, 'element')
      console.log(topPosition, ' topPosition')
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
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
          onClick={(e) => {
            handleFormStep(e, "back", skipStep, skipPastDirection);
            scrollToQuoteForm();
          }}
          className="bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
        >
          Back
        </button>
      )}
      {formSteps > 6 ? (
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="text-white bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-600 font-semibold rounded-md text-sm px-4 py-2 max-w-96 sm:w-auto"
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          onClick={(e) => {
            handleFormStep(e, "next", skipStep, skipPastDirection);
            scrollToQuoteForm();
          }}
          className="bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
        >
          Next
        </button>
      )}
    </div>
  );
};
export default BackAndNextBtns;
