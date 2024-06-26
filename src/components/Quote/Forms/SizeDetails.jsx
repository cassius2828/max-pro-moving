import { useRef, useState } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../../gsap/baseAnimations";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

///////////////////////////////////
// Size Details Component
///////////////////////////////////
export const SizeDetails = () => {
  const container = useRef();
  const {  truckSize, NumOfWorkers, timeForJob, handleUpdateForm } = useQuoteContext();


  /////////////////////////////////
  // GSAP animations for form sections
  /////////////////////////////////
  useGSAP(
    () => {
      fadeInMultiple(".form-section");
      // fadeFromTopMultiple("label", container.current);
    },
    { scope: container }
  );

  /////////////////////////////////
  // Handle change in form inputs
  /////////////////////////////////
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSizeDetails({ ...sizeDetails, [name]: value });
  //   handleUpdateForm(e.target);
  //   console.log(sizeDetails);
  // };

  return (
    <div
      ref={container}
      className="form-section flex flex-col justify-evenly h-full"
    >
      {/* Dropdown for truck size */}
      <div className="my-12 mt-6">
        <label
          htmlFor="truckSize"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Truck Size
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleUpdateForm(e.target)}
          value={truckSize}
          name="truckSize"
          id="truckSize"
        >
          <option value="pickup">Pickup</option>
          <option value="17ft">U-Haul 17ft</option>
          <option value="26ft">U-Haul 26ft</option>
        </select>
      </div>

      {/* Dropdown for number of workers */}
      <div className="my-12 mt-6">
        <label
          htmlFor="NumOfWorkers"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Number of Workers
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleUpdateForm(e.target)}
          value={NumOfWorkers}
          name="NumOfWorkers"
          id="NumOfWorkers"
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Dropdown for time to complete job */}
      <div className="my-12 mt-6">
        <label
          htmlFor="timeForJob"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Time to Complete Job
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleUpdateForm(e.target)}
          value={timeForJob}
          name="timeForJob"
          id="timeForJob"
        >
          <option value="3">3 hours</option>
          <option value="4">4 hours</option>
          <option value="5">5 hours</option>
          <option value="5+">5+ hours</option>
        </select>
      </div>

      <BackAndNextBtns />
    </div>
  );
};
