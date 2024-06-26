import { useRef } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import { useGSAP } from "@gsap/react";
import { fadeInMultiple } from "../../../gsap/baseAnimations";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";

///////////////////////////////////
// Contact Form Component
///////////////////////////////////
export const ContactForm = () => {
  const container = useRef();
  const { handleUpdateForm } = useQuoteContext();

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
    <div ref={container} className="form-section flex flex-col justify-evenly h-full">
      
      {/* Input for first name */}
      <div className="my-12 mt-6">
        <label
          htmlFor="firstName"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
          onChange={(e) => handleUpdateForm(e.target)}
          type="text"
          id="firstName"
          name="firstName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter first name"
          required
        />
      </div>
      
      {/* Input for last name */}
      <div className="my-12">
        <label
          htmlFor="lastName"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Last Name
        </label>
        <input
          onChange={(e) => handleUpdateForm(e.target)}
          type="text"
          id="lastName"
          name="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter last name"
          required
        />
      </div>
      
      {/* Input for cell */}
      <div className="my-12">
        <label
          htmlFor="cell"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Cell
        </label>
        <input
          onChange={(e) => handleUpdateForm(e.target)}
          type="text"
          id="cell"
          name="cell"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter cell number"
          required
        />
      </div>
      
      {/* Input for email */}
      <div className="my-12">
        <label
          htmlFor="email"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          onChange={(e) => handleUpdateForm(e.target)}
          type="text"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter email"
          required
        />
      </div>
      
      <BackAndNextBtns />
    </div>
  );
};
