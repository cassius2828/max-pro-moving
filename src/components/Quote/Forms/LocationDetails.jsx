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
      className="form-section flex flex-col justify-evenly h-full"
    >
      {/* Input for pick up location */}
      <AutocompleteInput
        onPlaceSelected={handleSelectedPlace}
        id={`startingLocation`}
        label="Pick Up Location"
      />

      {/* Radio buttons for multiple stops */}
      <div className="my-12">
        <label
          htmlFor="multipleStops"
          className="block capitalize mb-5 text-3xl font-medium text-blue-900 "
        >
          Multiple Stops?
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              id="multipleStopsYes"
              name="multipleStops"
              type="radio"
              value={true}
              onChange={(e) => handleRadioChange(e.target)}
              className="mr-2 w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-900 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="multipleStopsYes"
              className="text-3xl font-medium text-gray-900 "
            >
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
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="multipleStopsNo"
              className="text-3xl font-medium text-gray-900 "
            >
              No
            </label>
          </div>
        </div>
      </div>

      {multipleStops !== null && (
        <div>
          {multipleStops ? (
            <div className="my-12">
              {/* Input for stop 1 address */}
              <AutocompleteInput
                onPlaceSelected={handleSelectedPlace}
                id={`stop1`}
                label="Stop 1 Address"
              />

              {/* Input for stop 2 address */}
              <AutocompleteInput
                onPlaceSelected={handleSelectedPlace}
                id={`stop2`}
                label="Stop 2 Address"
              />
              {/* Add more stops as needed */}
            </div>
          ) : (
            <div className="my-12">
              {/* Input for single stop address */}
              <AutocompleteInput
                onPlaceSelected={handleSelectedPlace}
                id={`stop1`}
                label="Enter Address"
              />
            </div>
          )}
        </div>
      )}
      <BackAndNextBtns />
    </div>
  );
};
