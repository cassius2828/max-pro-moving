
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
        <ContactForm />
      ) : (
        <DateOfMoveForm />
      )}
    </form>
  );
};

export default QuoteCalculator;
