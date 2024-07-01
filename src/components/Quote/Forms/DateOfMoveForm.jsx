import { useRef } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import SubmitFormBtn from "../QuoteBtns/SubmitFormBtn";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../../gsap/baseAnimations";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";
///////////////////////////////////
// Date Of Move Form Component
///////////////////////////////////
export const DateOfMoveForm = () => {
  const container = useRef();
  const { handleUpdateForm, handleDateChange, projectDate, hour, period } =
    useQuoteContext();

  /////////////////////////////////
  // GSAP animations for form sections
  /////////////////////////////////
  useGSAP(
    () => {
      fadeInMultiple(".form-section");
    },
    { scope: container }
  );

  return (
    <div
    ref={container}
    className="form-section flex flex-col justify-evenly h-full"
  >
    {/* Input for project date */}
    <div className="my-12 mt-6">
      <label
        htmlFor="projectDate"
        className="block capitalize mb-5 text-3xl font-medium text-blue-900"
      >
        Project Date
      </label>
      <DatePicker
        selected={projectDate}
        onChange={(date) => handleDateChange(date)}
        name="projectDate"
        id="projectDate"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholderText="Enter project date"
        required
      />
    </div>
  
    {/* Input for time of day */}
    <div className="my-12 mt-6">
      <label
        htmlFor="timeOfDay"
        className="block capitalize mb-5 text-3xl font-medium text-blue-900"
      >
        Time of Day
      </label>
      <div className="flex space-x-4">
        <select
          name="hour"
          value={hour}
          onChange={(e) => handleUpdateForm(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        >
          <option value="">AM/PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  
    <BackAndNextBtns />
    <SubmitFormBtn />
  </div>
  
  );
};
