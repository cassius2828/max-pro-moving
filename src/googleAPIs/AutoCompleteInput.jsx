import React, { useRef, useEffect } from "react";

const AutocompleteInput = ({ onPlaceSelected }) => {
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
    <div className="my-12 mt-6">
      <label
        htmlFor="autocomplete"
        className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
      >
        Address
      </label>
      <input
        ref={inputRef}
        type="text"
        id="autocomplete"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter your address"
        required
      />
    </div>
  );
};

export default AutocompleteInput;
