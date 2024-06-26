import { useEffect, useRef, useState } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import { useGSAP } from "@gsap/react";
import { fadeFromTopMultiple } from "../../../gsap/baseAnimations";

///////////////////////////////////
// Location Details Component
//////////////////////////////////
export const LocationDetails = ({onPlaceSelected}) => {
  const [multipleStops, setMultipleStops] = useState(false);
  const container = useRef();

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
  const handleRadioChange = (event) => {
    setMultipleStops(event.target.value === "yes");
  };
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      console.error("Google API is not loaded");
      return;
    }

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["geocode"], // Specify the types of predictions you want to get
      componentRestrictions: { country: "us" } // Restrict to a specific country, if needed
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      onPlaceSelected(place);
    });
  }, [onPlaceSelected]);
  return (
    <div ref={container} className="form-section flex flex-col justify-evenly h-full">
      {/* Input for pick up location */}
      <div className="mb-12 mt-6">
        <label
          htmlFor="addressFrom"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Pick up location
        </label>
        <input
        ref={inputRef}
          type="text"
          id="addressFrom"
          name="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
      
      {/* Radio buttons for multiple stops */}
      <div className="my-12">
        <label
          htmlFor="multipleStops"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Multiple Stops?
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              id="multipleStopsYes"
              name="multipleStops"
              type="radio"
              value="yes"
              onChange={handleRadioChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="multipleStopsYes"
              className="text-3xl font-medium text-gray-900 dark:text-white"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="multipleStopsNo"
              name="multipleStops"
              type="radio"
              value="no"
              onChange={handleRadioChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="multipleStopsNo"
              className="text-3xl font-medium text-gray-900 dark:text-white"
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
              <label
                htmlFor="stop1"
                className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
              >
                Stop 1 Address
              </label>
              <input
                id="stop1"
                name="stop1"
                type="text"
                placeholder="Enter Stop 1 Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                required
              />
              
              {/* Input for stop 2 address */}
              <label
                htmlFor="stop2"
                className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
              >
                Stop 2 Address
              </label>
              <input
                id="stop2"
                name="stop2"
                type="text"
                placeholder="Enter Stop 2 Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                required
              />
              {/* Add more stops as needed */}
            </div>
          ) : (
            <div className="my-12">
              {/* Input for single stop address */}
              <label
                htmlFor="singleStop"
                className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                id="singleStop"
                name="singleStop"
                type="text"
                placeholder="Enter Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          )}
        </div>
      )}
      <BackAndNextBtns />
    </div>
  );
};
