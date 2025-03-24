import { useEffect, useState } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";

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
  const {
    handleUpdateLocations,
    handleUpdateForm,
    startingLocationDetails,
    startingLocation,
    stopOne,
    stopOneDetails,
    stopTwo,
    stopTwoDetails,
    stopThree,
    stopThreeDetails,
  } = useQuoteContext();
  let locationObj = {
    stop1: stopOne,
    stop1Details: stopOneDetails,
    stop2: stopTwo,
    stop2Details: stopTwoDetails,
    stop3: stopThree,
    stop3Details: stopThreeDetails,
  };
  const [stopCount, setStopCount] = useState(2);

  const handleStopCountChange = (e) => {
    const count = Math.min(Math.max(Number(e.target.value), 1), 4); // Ensures value is between 1-4
    setStopCount(count);
  };
  /////////////////////////////////
  // Reference for container
  /////////////////////////////////

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
  // Handle radio button change
  /////////////////////////////////
  const handleRadioChange = (e) => {
    setMultipleStops(e.value === "true");
    handleUpdateForm(e);
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      {/* Input for pick-up location */}
      <AutocompleteInput
        detailsValue={startingLocationDetails}
        location={startingLocation}
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
            <label
              htmlFor="multipleStopsYes"
              className="ml-2 text-sm text-gray-900"
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
              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300"
            />
            <label
              htmlFor="multipleStopsNo"
              className="ml-2 text-sm text-gray-900"
            >
              No
            </label>
          </div>
        </div>
      </div>

      {/* Number of stops input */}
      {multipleStops ? (
        <div className="mt-6">
          <label
            htmlFor="stopCount"
            className="block text-sm font-medium text-gray-900"
          >
            How many stops? (Max: 3)
          </label>
          <input
            type="number"
            id="stopCount"
            name="stopCount"
            min="2"
            max="3"
            value={stopCount}
            onChange={handleStopCountChange}
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
          />
        </div>
      ) : (
        <AutocompleteInput
          onPlaceSelected={handleSelectedPlace}
          id="endLocation"
          label="Drop Off Location"
        />
      )}

      {/* Stops input fields */}
      {multipleStops &&
        Array.from({ length: stopCount }, (_, index) => (
          <AutocompleteInput
            detailsValue={locationObj[`stop${index + 1}Details`]}
            location={locationObj[`stop${index + 1}`]}
            key={`stop${index + 1}`}
            onPlaceSelected={() => {}}
            id={`stop${index + 1}`}
            label={`Stop ${index + 1} Address`}
          />
        ))}

      {/* Buttons */}
      <div className="mt-6 border-t border-gray-900/10 pt-4 flex justify-end gap-x-6">
        <BackAndNextBtns />
      </div>
    </div>
  );
};
