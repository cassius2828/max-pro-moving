import { ContactForm } from "./Forms/ContactForm";
import { DateOfMoveForm } from "./Forms/DateOfMoveForm";
import { ExtraDetails } from "./Forms/ExtraDetails";
import { LocationDetails } from "./Forms/LocationDetails";
import { SizeDetails } from "./Forms/SizeDetails";

import Calculation from "./Calculation";
import { useQuoteContext } from "../../customHooks/useQuoteContext";
import { useState } from "react";
import "../../App.css";

/////////////////////////////////
// Quote Calculator Component
/////////////////////////////////
const QuoteCalculator = () => {
  const { formSteps } = useQuoteContext();
  // eslint-disable-next-line no-unused-vars
  const [selectedPlace, setSelectedPlace] = useState(null);

  /////////////////////////////////
  // Handle place selection
  /////////////////////////////////
  const handlePlaceSelected = (place) => {
    setSelectedPlace(place);
    console.log("Selected place:", place);
  };

  return (
    <form id="quote-form" className="w-full max-w-3xl mx-auto my-12">
      {" "}
      {formSteps === 1 ? (
        <LocationDetails onPlaceSelected={handlePlaceSelected} />
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
      )}{" "}
    </form>
  );
};

export default QuoteCalculator;
