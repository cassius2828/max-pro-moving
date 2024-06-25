import { useRef } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import SubmitFormBtn from "../QuoteBtns/SubmitFormBtn";
import { useGSAP } from "@gsap/react";
import { fadeFromTop, fadeFromTopMultiple, fadeInMultiple,  } from "../../../gsap/baseAnimations";

export const DateOfMoveForm = () => {
  const container = useRef();

  useGSAP(
    () => {
      fadeInMultiple(".form-section");
 
    },
    { scope: container }
  );
  return (
    <div className="form-section flex flex-col justify-evenly h-full">


      <div className="my-12 mt-6">
        <label
          htmlFor="addressFrom"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
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
      <div className="my-12 mt-6">
        <label
          htmlFor="addressFrom"
          className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
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
      <BackAndNextBtns />
      <SubmitFormBtn />
    </div>
  );
};
