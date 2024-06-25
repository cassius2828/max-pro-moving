import { useState } from "react";

export const LocationDetails = () => {
  const [multipleStops, setMultipleStops] = useState(false);

  const handleRadioChange = (event) => {
    setMultipleStops(event.target.value === "yes");
  };
  return (
    <>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Pick up location
        </label>
        <input
          type="text"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="multipleStops"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
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
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
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
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
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
            <div className="mb-5">
              {/* Render additional fields for multiple stops */}
              <label
                htmlFor="stop1"
                className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
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
              <label
                htmlFor="stop2"
                className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
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
            <div className="mb-5">
              {/* Render fields for a single stop */}
              <label
                htmlFor="singleStop"
                className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
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
    </>
  );
};

const initialSizeDetails = {
  truckSize: "pickup",
  NumOfWorkers: "2",
  time: "3",
};
export const SizeDetails = () => {
  const [sizeDetails, setSizeDetails] = useState(initialSizeDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSizeDetails({ ...sizeDetails, [name]: value });
    console.log(sizeDetails);
  };
  return (
    <>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Truck Size
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleChange(e)}
          value={sizeDetails.truckSize}
          name="truckSize"
          id="truckSize"
        >
          <option value="pickup">Pickup</option>
          <option value="17ft">U-Haul 17ft</option>
          <option value="26ft">U-Haul 26ft</option>
        </select>
      </div>{" "}
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Number of Workers
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleChange(e)}
          value={sizeDetails.NumOfWorkers}
          name="NumOfWorkers"
          id="NumOfWorkers"
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>{" "}
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Time to Complete Job
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleChange(e)}
          value={sizeDetails.time}
          name="time"
          id="time"
        >
          <option value="3">3 hours</option>
          <option value="4">4 hours</option>
          <option value="5">5 hours</option>
          <option value="5+">5+ hours</option>
        </select>
      </div>{" "}
    </>
  );
};

export const ExtraDetails = () => {
  const [extraDetails, setExtraDetails] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExtraDetails({ ...extraDetails, [name]: value });
    console.log(extraDetails);
  };
  const handleRadioChange = (event) => {
    // setMultipleStops(event.target.value === "yes");
  };
  return (
    <>
      {" "}
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Stairs Involved
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              id="multipleStopsYes"
              name="multipleStops"
              type="radio"
              value="yes"
              onChange={handleRadioChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
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
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="multipleStopsNo"
              className="text-3xl font-medium text-gray-900 dark:text-white"
            >
              No
            </label>
          </div>
        </div>
      </div>{" "}
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          List Large Items
        </label>
        <input
          type="textarea"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ex: pool table, tall dressers"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Summary of Move
        </label>
        <input
          type="textarea"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="details about the move"
          required
        />
      </div>
    </>
  );
};

export const ContactForm = () => {
  return (
    <>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          first name
        </label>
        <input
          type="text"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          last name
        </label>
        <input
          type="text"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          cell
        </label>
        <input
          type="text"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          email
        </label>
        <input
          type="text"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
    </>
  );
};

export const DateOfMoveForm = () => {
  return (
    <>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          project date
        </label>
        <input
          type="text"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="addressFrom"
          className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
        >
          time of day
        </label>
        <input
          type="text"
          id="addressFrom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter pick up location"
          required
        />
      </div>
    </>
  );
};
