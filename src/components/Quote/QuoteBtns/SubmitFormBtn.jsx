import axios from "axios";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import { calculateTotalCosts, getNumOfMovers } from "../../../utils";

const url = import.meta.env.VITE_NETLIFY_EMAIL_FN_URL;

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
    console.log(url, " <-- url to send to ");
    try {
      const response = await axios.put(url, formData);
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

    const response = await axios.post(
      `${import.meta.env.VITE_LOCALHOST_NETLIFY_SERVER}/api/matrix`,
      formData
    );
    return response.data;
  };

  // ✅ Final submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Get distance
    const { distance } = await calculateDistanceAndTime();

    // sync calculate how many movers are needed
    const totalNumOfTrucks =
      numOf16BoxTrucks + numOf20BoxTrucks + numOf26BoxTrucks;
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
    console.log(data, " <--- data from sendEmails");
    console.log(computedQuoteAmount, " <--- cpmputed quote amount");
    if (data.success) {
      alert("Emails successfully sent");
      handleUpdateQuoteFormSuccess(true);
    } else {
      alert("Emails failed to send");
      handleUpdateQuoteFormSuccess(false);
    }
  };

  // 👇 Form buttons
  return (
    <div className="w-full flex justify-between gap-12 mt-4">
      {/* Back button */}
      <button
        onClick={(e) => handleFormStep(e, "back")}
        className="bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 text-white font-semibold rounded-md text-sm px-4 py-2 max-w-96"
      >
        Back
      </button>
      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-600 font-semibold rounded-md text-sm px-4 py-2 max-w-96 sm:w-auto"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitFormBtn;
