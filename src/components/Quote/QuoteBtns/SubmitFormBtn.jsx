import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import {
  calculateTotalCosts,
  convertBoxTruckToNumber,
  getNumOfMovers,
} from "../../../utils";

const SubmitFormBtn = () => {
  // 🧠 Grab all relevant values and methods from your Quote Context
  const {
    handleFormStep,
    firstName,
    lastName,
    serviceType,

    numOf16BoxTrucks,
    numOf20BoxTrucks,
    numOf26BoxTrucks,
    projectDate,
    email,
    timeOfDay,
    numOfWorkers,
    phone,

    projectStartTime,
    additionalItems,
    handleUpdateQuoteAmount, // dispatch that updates quoteAmount
    handleUpdateQuoteFormSuccess,
    handleUpdateWorkers,
    startingLocation,
    startingLocationDetails,
    startingLocationStairFlights,
    stop1,
    stop1Details,
    stop1StairFlights,
    stop2,
    stop2Details,
    stop2StairFlights,
    stop3,
    stop3Details,
    stop3StairFlights,
    endLocation,
    endLocationDetails,
    endLocationStairFlights,
    disassemblyDetails,
    specialtyItemsDetails,
    largeItemsDetails,
    junkRemovalDetails,
    singleItemDetails,
    message,
    setQuoteIsLoading,
    quoteIsLoading,
  } = useQuoteContext();

  // 📩 Send data to Mailtrap via Netlify function
  const sendEmails = async (distance, quoteAmount) => {
    const formData = {
      firstName,
      lastName,
      email,

      // ✍️ Quote-related fields
      quoteAmount,
      additionalItems,

      // 🛻 Move details
      serviceType,
      startingLocation: startingLocation.formatted_address,
      endLocation: endLocation.formatted_address,
      stop1: stop1?.formatted_address || "",
      stop2: stop2?.formatted_address || "",
      stop3: stop3?.formatted_address || "",
      distance,

      // location stop details
      startingLocationDetails,
      stop1Details,
      stop2Details,
      stop3Details,
      endLocationDetails,

      // 🚚 Trucks
      numOf16BoxTrucks,
      numOf20BoxTrucks,
      numOf26BoxTrucks,

      // 📆 Timing
      projectDate,
      timeOfDay,
      projectStartTime,

      // 👷 Workers & contact
      numOfWorkers,
      phone,

      // 🏠 Staircase info
      startingLocationStairFlights,
      endLocationStairFlights,
      stop1StairFlights,
      stop2StairFlights,
      stop3StairFlights,

      // special items info
      disassemblyDetails,
      specialtyItemsDetails,
      largeItemsDetails,
      junkRemovalDetails,
      singleItemDetails,

      // message about move
      message,
    };

    try {
      const response = await axios.put("/api/email", formData);
      return response.data;
    } catch (err) {
      throw new Error("Unable to send report of quote");
    }
  };

  // 📍 Call your distance matrix function
  const calculateDistanceAndTime = async () => {
    const formData = {
      startingLocation: startingLocation?.place_id,
      endLocation: endLocation?.place_id,
      stop1: stop1?.place_id,
      stop2: stop2?.place_id,
      stop3: stop3?.place_id,
    };

    const response = await axios.post(`/api/matrix`, formData);
    return response.data;
  };

  // ✅ Final submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setQuoteIsLoading(true);

    try {
      // 1. Get distance
      const { distance } = await calculateDistanceAndTime();

      // sync calculate how many movers are needed
      const totalNumOfTrucks =
        convertBoxTruckToNumber(numOf16BoxTrucks) +
        convertBoxTruckToNumber(numOf20BoxTrucks) +
        convertBoxTruckToNumber(numOf26BoxTrucks);
      const totalNumOfMovers = getNumOfMovers(totalNumOfTrucks);
      // update num of movers in state for email function
      await handleUpdateWorkers();
      // 3a. sync calc quote amount so sendEmail has correct val
      const computedQuoteAmount = calculateTotalCosts(
        projectDate,
        totalNumOfTrucks,
        totalNumOfMovers,
        distance.meters
      );
      // 3b. Update quote amount (async dispatch)
      await handleUpdateQuoteAmount(
        calculateTotalCosts(
          projectDate,
          totalNumOfTrucks,
          totalNumOfMovers,
          distance.meters
        )
      );

      // 4. Send emails
      const data = await sendEmails(distance.text, computedQuoteAmount);

      if (data.success) {
        toast.success("Emails successfully sent");
        handleUpdateQuoteFormSuccess(true);
      } else {
        toast.error("Emails failed to send");
        handleUpdateQuoteFormSuccess(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setQuoteIsLoading(false);
    }
  };

  // 👇 Form buttons
  return (
    <div className="w-full flex justify-between gap-12 mt-4">
      {/* Back button */}
      <button
        onClick={(e) => handleFormStep(e, "back")}
        className="bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
      >
        Back
      </button>
      <button
        onClick={handleSubmit}
        type="submit"
        className="capitalize w-32 text-white bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-600 font-semibold rounded-md text-sm px-4 py-2 max-w-96 sm:w-auto"
      >
        {quoteIsLoading ? "submitting..." : "submit"}
      </button>
      <Toaster />
    </div>
  );
};

export default SubmitFormBtn;
