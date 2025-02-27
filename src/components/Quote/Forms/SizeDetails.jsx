import { useRef } from "react";
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

  return (
<div
  ref={container}
  className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8"
>
  {/* Dropdown for truck size */}
  <div className="mt-6">
    <label
      htmlFor="truckSize"
      className="block text-sm/6 font-medium text-gray-900"
    >
      Truck Size
    </label>
    <select
      className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
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
  <div className="mt-6">
    <label
      htmlFor="NumOfWorkers"
      className="block text-sm/6 font-medium text-gray-900"
    >
      Number of Workers
    </label>
    <select
      className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
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
  <div className="mt-6">
    <label
      htmlFor="timeForJob"
      className="block text-sm/6 font-medium text-gray-900"
    >
      Time to Complete Job
    </label>
    <select
      className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
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

  {/* Buttons */}
  <div className="mt-6 border-t border-gray-900/10 pt-4 flex justify-end gap-x-6">
    <BackAndNextBtns />
  </div>
</div>
  
  );
};
