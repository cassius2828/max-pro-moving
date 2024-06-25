import { useRef, useState } from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";
import { useGSAP } from "@gsap/react";
import { fadeFromTop, fadeFromTopMultiple, fadeInMultiple } from "../../../gsap/baseAnimations";

const initialSizeDetails = {
    truckSize: "pickup",
    NumOfWorkers: "2",
    time: "3",
  };
  
export const SizeDetails = () => {
    const [sizeDetails, setSizeDetails] = useState(initialSizeDetails);
    const container = useRef();

    useGSAP(
      () => {
        fadeInMultiple(".form-section");
        // fadeFromTopMultiple("label",container.current);
      },
      { scope: container }
    );
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSizeDetails({ ...sizeDetails, [name]: value });
      console.log(sizeDetails);
    };
    return (
      <div className="form-section flex flex-col justify-evenly h-full">

        <div className="my-12 mt-6">
          <label
            htmlFor="password"
            className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
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
        <div className="my-12 mt-6">
          <label
            htmlFor="password"
            className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
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
        <div className="my-12 mt-6">
          <label
            htmlFor="password"
            className="block capitalize mb-5 text-3xl font-medium text-gray-900 dark:text-white"
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
        <BackAndNextBtns/>

      </div>
    );
  };
  