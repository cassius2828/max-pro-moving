import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";

import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import SubmitFormBtn from "../QuoteBtns/SubmitFormBtn";

export function ClientInfo() {
  const {
    handleUpdateForm,
    handleUpdateFormError,
    hour,
    period,
    projectDate,
    projectDateError,
    handleSetProjectStartTime,
    firstName,
    firstNameError,
    lastName,
    lastNameError,
  } = useQuoteContext();

  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="flex flex-col justify-center items-center max-w-xl mx-auto gap-x-6 gap-y-8 ">
          {/* first name */}
          <div className="w-full">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First name*
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleUpdateForm(e.target);
                  handleUpdateFormError(name + "Error", !value.length);
                }}
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                className={` ${
                  firstNameError
                    ? "outline-red-500 outline outline-1 -outline-offset-1"
                    : " outline-gray-300 outline outline-1 -outline-offset-1"
                } block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900   placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`}
                required
              />
            </div>
          </div>
          {/* last name */}
          <div className="w-full">
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Last name*
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleUpdateForm(e.target);
                  handleUpdateFormError(name + "Error", !value.length);
                }}
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                className={` ${
                  lastNameError
                    ? "outline-red-500 outline outline-1 -outline-offset-1"
                    : " outline-gray-300 outline outline-1 -outline-offset-1"
                } block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900   placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`}
                required
              />
            </div>
          </div>
          {/* date */}
          <div className="w-full">
            <label
              htmlFor="projectDate"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Date of Service*
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  const { name, value } = e.target;
                  handleUpdateForm(e.target);
                  handleUpdateFormError(name + "Error", !value.length);
                }}
                type="date"
                id="projectDate"
                name="projectDate"
                className={` ${
                  projectDateError
                    ? "outline-red-500 outline outline-1 -outline-offset-1"
                    : " outline-gray-300 outline outline-1 -outline-offset-1"
                } block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900   placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`}
                required
              />
            </div>
          </div>
          {/* Input for time of day */}
          <div className="mt-6 w-full">
            <label
              htmlFor="timeOfDay"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Time of Day <br />
              <span className="italic">
                dates and times will be confirmed by staff. The time chosen does
                not guarantee that services are available at selected time
              </span>
            </label>
            {/* // TODO: Special Rules for Selecting Time of Day based on work hours */}
            <div className="mt-3 flex gap-x-4">
              <select
                name="hour"
                value={hour}
                onChange={(e) => {
                  handleSetProjectStartTime();
                  handleUpdateForm(e.target);
                }}
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
                onChange={(e) => {
                  handleSetProjectStartTime();
                  handleUpdateForm(e.target);
                }}
                className="block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
                required
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <BackAndNextBtns
          missingReqFields={!firstName || !lastName || !projectDate || !hour}
        />
      </div>
    </form>
  );
}

export const ContactForm = () => {
  const { handleUpdateForm } = useQuoteContext();
  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      {/* email */}
      <div className="sm:col-span-4">
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Email address*
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleUpdateForm(e.target)}
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            required
          />
        </div>
      </div>
      {/* phone */}
      <div className="sm:col-span-4">
        <label
          htmlFor="phone"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Phone
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleUpdateForm(e.target)}
            type="tel"
            id="phone"
            name="phone"
            autoComplete="phone"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* message */}
      <div className="sm:col-span-4">
        <label
          htmlFor="message"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Message
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleUpdateForm(e.target)}
            type="textarea"
            id="message"
            name="message"
            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm/6 resize-none"
            rows="4"
            placeholder="Enter your text here..."
          />
        </div>
      </div>
      <SubmitFormBtn />
    </div>
  );
};
