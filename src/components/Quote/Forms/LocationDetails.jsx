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
  const [showErrors, setShowErrors] = useState({
    startingLocation: false,
    endLocation: false,
    stop1: false,
    stop2: false,
    stop3: false,
  });
  const {
    handleUpdateLocations,
    handleUpdateForm,
    startingLocationError,
    startingLocationDetails,
    startingLocation,
    stop1Error,
    stop1,
    stop1Details,
    stop2Error,
    stop2,
    stop2Details,
    stop3Error,
    stop3,
    stop3Details,
    // * stop 3
    endLocationError,
    endLocation,
    endLocationDetails,
    endLocationStairFlights,
    truckSize,
    serviceType,
    formSteps,
    handleFormStep,
    handleSetInvalidInputs,
    handleSetLocalError,
    isObjEmpty,
  } = useQuoteContext();

  let locationObj = {
    stop1,
    stop1Details,
    stop2,
    stop2Details,
    stop3,
    stop3Details,
  };
  const [stopCount, setStopCount] = useState(2);

  const skipStep =
    truckSize === "no-trucks"
      ? "skipTrucks"
      : serviceType !== "moving"
      ? "skipTrucks"
      : "";

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

  ///////////////////////////
  // Inputs array
  ///////////////////////////
  const inputsArray = [
    {
      name: "startingLocationError",
      value: Boolean(!startingLocation),
    },
    {
      name: "endLocationError",
      value: Boolean(!endLocation),
    },
    // {
    //   name: "lastNameError",
    //   value: Boolean(!lastName),
    // },
    // {
    //   name: "projectDateError",
    //   value: Boolean(!projectDate),
    // },
    // {
    //   name: "hourError",
    //   value: Boolean(!hour),
    // },
  ];

  ///////////////////////////
  // Submit
  ///////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  ///////////////////////////
  // Validate Errors
  ///////////////////////////
  const handleValidateErrors = () => {
    // Validate each required location field.

    return {
      startingLocation: isObjEmpty(startingLocation),
      // More validations can be added for stops and endLocation as needed:
      endLocation: isObjEmpty(endLocation),
      // If multiple stops are enabled, validate each stop similarly.
      stop1: multipleStops ? isObjEmpty(stop1) : false,
      stop2: multipleStops && stopCount >= 2 ? isObjEmpty(stop2) : false,
      stop3: multipleStops && stopCount === 3 ? isObjEmpty(stop3) : false,
    };
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      {/* Input for pick-up location */}
      <AutocompleteInput
        detailsValue={startingLocationDetails}
        location={startingLocation}
        invalidLocationInput={showErrors.startingLocation}
        onPlaceSelected={handleSelectedPlace}
        id="startingLocation"
        label="Pick Up Location"
      />
      {/* commented out mult stops option */}
      {/* Radio buttons for multiple stops */}
      {/* <div className="mt-6">
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
              checked={multipleStops}
              onChange={(e) => handleRadioChange(e.target)}
              className="h-4 w-4 text-gray-600 focus:ring-gray-600 border-gray-300"
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
              checked={!multipleStops}
              onChange={(e) => handleRadioChange(e.target)}
              className="h-4 w-4 text-gray-600 focus:ring-gray-600 border-gray-300"
            />
            <label
              htmlFor="multipleStopsNo"
              className="ml-2 text-sm text-gray-900"
            >
              No
            </label>
          </div>
        </div>
      </div> */}

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
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
          />
        </div>
      ) : (
        <AutocompleteInput
          onPlaceSelected={handleSelectedPlace}
          location={endLocation}
          detailsValue={endLocationDetails}
          invalidLocationInput={showErrors.endLocation}
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
            invalidLocationInput={showErrors}
            key={`stop${index + 1}`}
            onPlaceSelected={handleSelectedPlace}
            id={`stop${index + 1}`}
            label={`Stop ${index + 1} Address`}
          />
        ))}

      {/* Buttons */}
      <div className="mt-6 border-t border-gray-900/10 pt-4 flex justify-end gap-x-6">
        <div
          className={`w-full flex ${
            formSteps === 1 ? "justify-end" : "justify-between "
          } mt-6`}
        >
          {/* Back button */}
          {formSteps !== 1 && (
            <button
              onClick={(e) => handleFormStep(e, "back", skipStep, "back")}
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
                // check for errors synchronously for immediate updates on error state
                const errors = handleValidateErrors();
                // set state for UI feedback in Autocomplete component
                setShowErrors(errors);
                // helper returns true if there is a true value
                // if it has an error then it is true, so bang to flip value
                if (
                  !handleSetInvalidInputs([
                    errors.startingLocation,
                    errors.endLocation,
                  ])
                ) {
                  handleFormStep(e, "next", skipStep, "back");
                } else {
                  e.preventDefault();
                }
              }}
              className="bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
            >
              Next
            </button>
          )}
        </div>
        {/* <BackAndNextBtns skipStep={skipStep} skipPastDirection={'back'} /> */}
      </div>
    </div>
  );
};
