import { useState } from "react";
import { ContactForm, DateOfMoveForm, ExtraDetails, LocationDetails, SizeDetails } from "./Forms";
import Calculation from "./Calculation";

const QuoteCalculator = () => {
  const [formSteps, setFormSteps] = useState(6);
  const handleFormStep = (e, action) => {
    e.preventDefault();

    if (action === "back") {
      if (formSteps > 1) {
        setFormSteps((prev) => prev - 1);
      }
    }
    if (action === "next") {
      if (formSteps < 5) {
        setFormSteps((prev) => prev + 1);
      }
    }
  };
  return (
    <form className="max-w-lg mx-auto border-2 rounded-xl p-8">
      {formSteps === 1 ? (
        <LocationDetails />
      ) : formSteps === 2 ? (
        <SizeDetails />
      ) : formSteps === 3 ? (
        <ExtraDetails />
      ) : formSteps === 4 ? (
        <Calculation />
      ) : formSteps === 5 ? (
        <ContactForm/>
      ) : (
        <DateOfMoveForm/>
      )}
      {/* 
      <div className="w-full flex justify-around mb-8">
        <button
          onClick={(e) => handleFormStep(e, "back")}
          className={` ${
            formSteps === 1
              ? "disabled cursor-not-allowed bg-slate-700 hover:bg-slate-700  dark:bg-slate-700 dark:hover:bg-slate-700  "
              : "bg-blue-700 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800  focus:ring-blue-300"
          }text-white mx-5    focus:outline-none font-medium rounded-lg text-3xl w-full sm:w-auto px-5 py-2.5 text-center `}
        >
          back
        </button>
        <button
          onClick={(e) => handleFormStep(e, "next")}
          className={` ${
            formSteps > 3
              ? "disabled cursor-not-allowed bg-slate-700 hover:bg-slate-700  dark:bg-slate-700 dark:hover:bg-slate-700  "
              : "bg-blue-700 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800  focus:ring-blue-300"
          }text-white mx-5    focus:outline-none font-medium rounded-lg text-3xl w-full sm:w-auto px-5 py-2.5 text-center `}
        >
          next
        </button>
      </div>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calculate
        </button>
      </div> */}
    </form>
  );
};

export default QuoteCalculator;
