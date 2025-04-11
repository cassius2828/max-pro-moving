/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { useQuoteContext } from "../customHooks/useQuoteContext";

/////////////////
// Autocomplete Input Component
/////////////////
const AutocompleteInput = ({
  onPlaceSelected,
  id,
  label,
  detailsValue,
  location,invalidLocationInput
}) => {
  const inputRef = useRef(null);
  const {
    handleUpdateForm,
    startingLocation,
    startingLocationError,
    endLocation,
    endLocationError,
    stop1,
    stop2,
  } = useQuoteContext();
  const [selectedValue, setSelectedValue] = useState("0");



  /////////////////////////////////
  // Effect to initialize Google Autocomplete
  /////////////////////////////////
  useEffect(() => {
    if (!window.google) {
      console.error("Google API is not loaded");
      return;
    }

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["geocode"], // Specify the types of predictions you want to get
        componentRestrictions: { country: "us" }, // Restrict to a specific country, if needed
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      onPlaceSelected(id, place);
    });
  }, [id, onPlaceSelected]);

  return (
    <>
      <div className="mt-6">
        <label
          htmlFor={id}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
        <input
          ref={inputRef}
          type="text"
          id={id}
          name={id}
          className={` ${
            invalidLocationInput
              ? "outline-red-500 outline outline-1 -outline-offset-1"
              : " outline-gray-300 outline outline-1 -outline-offset-1"
          } block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`}
          placeholder={label}
          required
        />
      </div>
      {location && (
        <>
          <label
            htmlFor={id}
            className="block text-sm/6 font-medium text-gray-900 mt-5"
          >
            Additional Location Info (optional)
          </label>
          <textarea
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
            onChange={(e) => handleUpdateForm(e.target)}
            value={detailsValue}
            name={id + "Details"}
            id={id + "Details"}
          ></textarea>
          <label
            htmlFor={id}
            className="block text-sm/6 font-medium text-gray-900 mt-5"
          >
            How many flights of stairs at this stop?
          </label>
          <div className="mt-3 space-y-2">
            {["0", "1", "2", "3+", "not sure"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 text-gray-900"
              >
                <input
                  type="radio"
                  id={id + "StairFlights"}
                  name={id + "StairFlights"}
                  value={option}
                  checked={selectedValue === option}
                  onChange={(e) => {
                    handleUpdateForm(e.target);
                    setSelectedValue(option);
                  }}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>
                  {option === "not sure"
                    ? "Not sure yet"
                    : `${option} Flight${option === "1" ? "" : "s"}`}
                </span>
              </label>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AutocompleteInput;
