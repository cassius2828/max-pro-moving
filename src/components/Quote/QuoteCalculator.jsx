import { ClientInfo, ContactForm } from "./Forms/ContactForm";
import { DateOfMoveForm } from "./Forms/DateOfMoveForm";
import { ExtraDetails } from "./Forms/ExtraDetails";
import { LocationDetails } from "./Forms/LocationDetails";
import { SizeDetails } from "./Forms/SizeDetails";
import JunkRemoval from './Forms/JunkRemoval'
import Calculation from "./Calculation";
import { useQuoteContext } from "../../customHooks/useQuoteContext";
import { useState } from "react";
import ServiceType from "./Forms/ServiceType";
import TruckSpecifics from "./Forms/TruckSpecifics";
import AdditionalItemInfo from "./Forms/AdditionalItemInfo";

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
    <form id="quote-form" className="fade-in w-full max-w-3xl mx-auto my-12">
      {" "}
      {formSteps === 1 ? (
        // <LocationDetails onPlaceSelected={handlePlaceSelected} />
        <ClientInfo/>
      ) : formSteps === 2 ? (
        // <SizeDetails />
        <ServiceType/>
      ) : formSteps === 3 ? (
        // <ExtraDetails />
        <TruckSpecifics/>
      ) : formSteps === 4 ? (
        // <Calculation />
        <LocationDetails onPlaceSelected={handlePlaceSelected} />

      ) : formSteps === 5 ? (
        // <ContactForm />
        <AdditionalItemInfo/>
      ) : formSteps === 6 ? (
        // <ContactForm />
        <JunkRemoval/>
      ): (
        // <DateOfMoveForm />
        <ContactForm/>
      )}{" "}
    </form>
  );
};

export default QuoteCalculator;
