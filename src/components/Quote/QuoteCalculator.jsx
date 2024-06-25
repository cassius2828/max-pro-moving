import { ContactForm } from "./Forms/ContactForm";
import { DateOfMoveForm } from "./Forms/DateOfMoveForm";
import { ExtraDetails } from "./Forms/ExtraDetails";
import { LocationDetails } from "./Forms/LocationDetails";
import { SizeDetails } from "./Forms/SizeDetails";

import Calculation from "./Calculation";
import { useQuoteContext } from "../../customHooks/useQuoteContext";

const QuoteCalculator = () => {
  const { formSteps } = useQuoteContext();

  return (
    <form
      id="quote-form"
      className="flex flex-col justify-evenly sm:w-full md:w-50vw lg:w-50vw xl:max-w-50rem lg:h-75rem mx-auto md:border-2 rounded-xl p-14"
    >
      
      {formSteps === 1 ? (
        <LocationDetails />
      ) : formSteps === 2 ? (
        <SizeDetails />
      ) : formSteps === 3 ? (
        <ExtraDetails />
      ) : formSteps === 4 ? (
        <Calculation />
      ) : formSteps === 5 ? (
        <ContactForm />
      ) : (
        <DateOfMoveForm />
      )}
    </form>
  );
};

export default QuoteCalculator;
