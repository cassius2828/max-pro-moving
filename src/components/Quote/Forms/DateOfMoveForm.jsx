import { useRef } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import SubmitFormBtn from "../QuoteBtns/SubmitFormBtn";


import { useQuoteContext } from "../../../customHooks/useQuoteContext";

import "../../../App.css";
///////////////////////////////////
// Date Of Move Form Component
///////////////////////////////////
export const DateOfMoveForm = () => {

  const { handleUpdateForm, projectDate, hour, period } =
    useQuoteContext();


  return (
    <div
    
      className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8"
    >
      {/* Input for project date */}
      <div className="mt-6">
        <label
          htmlFor="projectDate"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Project Date
        </label>
        <input
          type="date"
          selected={projectDate}
          onChange={(e) => handleUpdateForm(e.target)}
          name="projectDate"
          id="projectDate"
          className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
          required
        />
      </div>

      {/* Input for time of day */}
      <div className="mt-6">
        <label
          htmlFor="timeOfDay"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Time of Day
        </label>
        <div className="mt-3 flex gap-x-4">
          <select
            name="hour"
            value={hour}
            onChange={(e) => handleUpdateForm(e.target)}
            className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
            required
          >
            <option value="">Select hour</option>
            {[...Array(12).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            name="period"
            value={period}
            onChange={(e) => handleUpdateForm(e.target)}
            className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
            required
          >
            <option value="">AM/PM</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 border-t border-gray-900/10 pt-4 flex justify-end gap-x-6">
        <BackAndNextBtns />
        <SubmitFormBtn />
      </div>
    </div>
  );
};
