import { useEffect, useRef, useState } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import { useGSAP } from "@gsap/react";
import { fadeFromTopMultiple } from "../../../gsap/baseAnimations";
import AutocompleteInput from "../../../googleAPIs/AutoCompleteInput";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

///////////////////////////////////
// Location Details Component
//////////////////////////////////
export const LocationDetails = () => {
  /////////////////////////////////
  // State for multiple stops and places
  /////////////////////////////////
  const [multipleStops, setMultipleStops] = useState(null);
  const [places, setPlaces] = useState([]);
  const { handleUpdateLocations, handleUpdateForm } = useQuoteContext();

  /////////////////////////////////
  // Reference for container
  /////////////////////////////////
  const container = useRef();

  /////////////////////////////////
  // Handle selected place
  /////////////////////////////////
  const handleSelectedPlace = (id, place) => {
    const updatedPlaces = places.map((p) => {
      return p.formId === id ? { formId: id, place } : p;
    });

    const formIdExists = places.some((p) => p.formId === id);
    if (!formIdExists) {
      updatedPlaces.push({ formId: id, place });
    }
    setPlaces(updatedPlaces);
  };

  /////////////////////////////////
  // Update locations when places change
  /////////////////////////////////
  useEffect(() => {
    places.forEach((place) => {
      handleUpdateLocations(place);
    });
  }, [places]);

  /////////////////////////////////
  // GSAP animations for form sections
  /////////////////////////////////
  useGSAP(
    () => {
      fadeFromTopMultiple(".form-section");
    },
    { scope: container }
  );

  /////////////////////////////////
  // Handle radio button change
  /////////////////////////////////
  const handleRadioChange = (e) => {
    setMultipleStops(e.value === "true");
    handleUpdateForm(e);
  };

  return (
<div
  ref={container}
  className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8"
>
  {/* Input for pick-up location */}
  <AutocompleteInput
    onPlaceSelected={handleSelectedPlace}
    id="startingLocation"
    label="Pick Up Location"
  />

  {/* Radio buttons for multiple stops */}
  <div className="mt-6">
    <label
      htmlFor="multipleStops"
      className="block text-sm/6 font-medium text-gray-900"
    >
      Multiple Stops?
    </label>
    <div className="mt-3 flex items-center gap-x-6">
      <div className="flex items-center">
        <input
          id="multipleStopsYes"
          name="multipleStops"
          type="radio"
          value={true}
          onChange={(e) => handleRadioChange(e.target)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
        />
        <label htmlFor="multipleStopsYes" className="ml-2 text-sm text-gray-900">
          Yes
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="multipleStopsNo"
          name="multipleStops"
          type="radio"
          value={false}
          onChange={(e) => handleRadioChange(e.target)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
        />
        <label htmlFor="multipleStopsNo" className="ml-2 text-sm text-gray-900">
          No
        </label>
      </div>
    </div>
  </div>

  {multipleStops !== null && (
    <div className="mt-6">
      {multipleStops ? (
        <>
          <AutocompleteInput
            onPlaceSelected={handleSelectedPlace}
            id="stop1"
            label="Stop 1 Address"
          />
          <AutocompleteInput
            onPlaceSelected={handleSelectedPlace}
            id="stop2"
            label="Stop 2 Address"
          />
        </>
      ) : (
        <AutocompleteInput
          onPlaceSelected={handleSelectedPlace}
          id="stop1"
          label="Enter Address"
        />
      )}
    </div>
  )}

  {/* Buttons */}
  <div className="mt-6 border-t border-gray-900/10 pt-4 flex justify-end gap-x-6">
    <BackAndNextBtns />
  </div>
</div>
  );
};
