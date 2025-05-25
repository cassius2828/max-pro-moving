import { ClientInfo, ContactForm } from "./Forms/ContactForm";
import { LocationDetails } from "./Forms/LocationDetails";
import { useState } from "react";
import { useQuoteContext } from "../../customHooks/useQuoteContext";
import AdditionalItemInfo from "./Forms/AdditionalItemInfo";
import ServiceType from "./Forms/ServiceType";
import TruckSpecifics from "./Forms/TruckSpecifics";

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
  };

  return (
    <form className="fade-in w-full max-w-3xl mx-auto my-12  rounded-md min-h-[30rem]">
      {" "}
      {formSteps === 1 ? (
        // <LocationDetails onPlaceSelected={handlePlaceSelected} />
        <ClientInfo />
      ) : formSteps === 2 ? (
        // <SizeDetails />
        <ServiceType />
      ) : formSteps === 3 ? (
        // <ExtraDetails />
        <TruckSpecifics />
      ) : formSteps === 4 ? (
        // <Calculation />
        <LocationDetails onPlaceSelected={handlePlaceSelected} />
      ) : formSteps === 5 ? (
        // <ContactForm />
        <AdditionalItemInfo />
      ) : (
        // <DateOfMoveForm />
        <ContactForm />
      )}
    </form>
  );
};

export default QuoteCalculator;
