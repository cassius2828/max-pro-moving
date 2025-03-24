/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useQuoteContext } from "../customHooks/useQuoteContext";

/////////////////
// Autocomplete Input Component
/////////////////
const AutocompleteInput = ({
  onPlaceSelected,
  id,
  label,
  detailsValue,
  location,
}) => {
  const inputRef = useRef(null);
  const { handleUpdateForm, startingLocation, stop1, stop2 } =
    useQuoteContext();

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
          className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
          placeholder={label}
          required
        />
      </div>
      {location && (
        <textarea
          className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
          onChange={(e) => handleUpdateForm(e.target)}
          value={detailsValue}
          name={id + "Details"}
          id={id + "Details"}
        ></textarea>
      )}
    </>
  );
};

export default AutocompleteInput;
