import axios from "axios";
import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import { calculateTotalCosts, getNumOfMovers } from "../../../utils";
const url = import.meta.env.NETLIFY_EMAIL_FN_URL;
const SubmitFormBtn = () => {
  const {
    handleFormStep,
    firstName,
    lastName,
    serviceType,
    startingLocation,
    endLocation,
    stop1,
    stop2,
    stop3,
    numOf16BoxTrucks,
    numOf20BoxTrucks,
    numOf26BoxTrucks,
    projectDate,
    email,
    timeOfDay,
    numOfWorkers,
    phone,
    startingLocationStairFlights,
    endLocationStairFlights,
    stop1StairFlights,
    stop2StairFlights,
    stop3StairFlights,
    quoteAmount,
    projectStartTime,
    additionalItems,
  } = useQuoteContext();

  const sendEmails = async (distance) => {
    const formData = {
      firstName,
      lastName,
      email,

      // quote overrides
      quoteAmount: "sample $999",
      additionalItems,

      // move details
      serviceType,
      startingLocation,
      endLocation,
      stop1,
      stop2,
      distance,

      // truck counts
      numOf16BoxTrucks,
      numOf20BoxTrucks,
      numOf26BoxTrucks,

      // schedule
      projectDate,
      timeOfDay,
      projectStartTime,

      // crew & contact
      numOfWorkers,
      phone,

      // staircase details
      startingLocationStairFlights,
      endLocationStairFlights,
      stop1StairFlights,
      stop2StairFlights,
      stop3StairFlights,
    };

    try {
      const response = await axios.put(url, formData);
      return response.data;
    } catch (err) {
      throw new Error("Unable to send report of quote");
    }
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [distance, duration] = await calculateDistanceAndTime();
    const totalNumOfTrucks =
      numOf16BoxTrucks + numOf20BoxTrucks + numOf26BoxTrucks;
    const totalNumOfMovers = getNumOfMovers(totalNumOfTrucks);
    calculateTotalCosts(
      projectDate,
      totalNumOfTrucks,
      totalNumOfMovers,
      distance.meters
    );
    const data = await sendEmails(distance.text);
    if (data.success) {
      alert("Emails successfully sent");
    } else {
      alert("Emails failed to send");
    }
  };
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
