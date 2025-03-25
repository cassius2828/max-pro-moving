/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useReducer } from "react";

// import { calculateDistanceTwoLocations } from "../googleAPIs/functions/calculateMovingDistance";

export const QuoteContext = createContext();
const CALC_MOVE_DIST_ENDPOINT = import.meta.env.VITE_CALC_MOVE_DIST_ENDPOINT;
console.log(CALC_MOVE_DIST_ENDPOINT);

const initialFormState = {
  // progress of form
  formSteps: 6,
  // service type
  serviceType: "moving",
  // locations
  startingLocation: "",
  startingLocationDetails: "",
  multipleStops: false,
  stopOne: "",
  stopOneDetails: "",
  stopTwo: "",
  stopTwoDetails: "",
  stopThree: "",
  stopThreeDetails: "",
  distance: 0,
  estimatedTravelTime: 0,
  // sizing
  truckSize: "pickup",
  NumOfWorkers: 2,
  timeForJob: "3",
  // amouunt of trucks
  // if they select recommend for both then choose one 20ft
  numOf26BoxTrucks: "0",
  numOf20BoxTrucks: "0",
  numOf16BoxTrucks: "0",

  summaryOfMove: "",
  // quote
  quoteAmount: 0,
  // contact info
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  // project times
  projectDate: "",
  hour: "",
  period: "AM",
  projectStartTime: "",
  // additional items (radio)
  disassembly: "no",
  specialtyItems: "no",
  largeItems: "no",
  junkRemoval: "no",
  // addition items details
  disassemblyDetails: "",
  specialtyItemsDetails: "",
  largeItemsDetails: "",
  junkRemovalDetails: "",
};

/////////////////////
// Reducer function
/////////////////////
const reducer = (state, action) => {
  switch (action.type) {
    case "nextStep":
      return { ...state, formSteps: state.formSteps + 1 };
    case "prevStep":
      return { ...state, formSteps: state.formSteps - 1 };
    case "updateForm":
      return { ...state, [action.payload.name]: action.payload.value };
    case "updateDate":
      return { ...state, projectDate: action.payload };
    case "updateProjectStartTime":
      return { ...state, projectStartTime: state.hour + " " + state.period };
    case "updateLocations":
      return {
        ...state,
        [action.payload.formId]: action.payload.place.place_id,
      };
    case "calculateTimeAndDistance":
      return {
        ...state,
        distance: (action.payload.distanceValueMeters * 0.000621371).toFixed(2),
        estimatedTravelTime: action.payload.durationValueSeconds,
      };
    case "resetForm":
      return initialFormState;
    default:
      return state;
  }
};

//////////////////////////////////
// Quote Provider Component
//////////////////////////////////
export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const {
    serviceType,
    hour,
    period,
    truckSize,
    startingLocationDetails,
    stopOneDetails,
    stopTwoDetails,
    stopThreeDetails,
    disassembly,
    specialtyItems,
    largeItems,
    junkRemoval,
    disassemblyDetails,
    specialtyItemsDetails,
    largeItemsDetails,
    junkRemovalDetails,
    numOf26BoxTrucks,
    numOf20BoxTrucks,
    numOf16BoxTrucks,
  } = state;
  /////////////////////////////////
  // Handle form step navigation
  /////////////////////////////////
  const handleFormStep = (e, action) => {
    e.preventDefault();

    if (action === "back") {
      if (state.formSteps > 1) {
        dispatch({ type: "prevStep" });
      }
    }
    if (action === "next") {
      if (state.formSteps < 7) {
        dispatch({ type: "nextStep" });
      }
    }
  };

  /////////////////////////////////
  // Handle quote calculation
  /////////////////////////////////
  const handleCalculateQuote = async (startingLocation, stop1, stop2) => {
    const params = {
      startingLocation,
      stop1,
      stop2,
    };

    try {
      const response = await axios.post(CALC_MOVE_DIST_ENDPOINT, params);
      const data = response.data;
      console.log(data);
      if (data) {
        dispatch({ type: "calculateTimeAndDistance", payload: data });
        dispatch({ type: "nextStep" });
      } else {
        throw new Error("Could not calculate distance");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // dispatch({ type: "nextStep" });
  };

  /////////////////////////////////
  // Handle form reset
  /////////////////////////////////
  const handleResetForm = () => {
    dispatch({ type: "resetForm" });
  };

  /////////////////////////////////
  // Handle form update
  /////////////////////////////////
  const handleUpdateForm = (payload) => {
    dispatch({ type: "updateForm", payload });
    console.log(state);
  };

  /////////////////////////////////
  // Handle location update
  /////////////////////////////////
  const handleUpdateLocations = (payload) => {
    dispatch({ type: "updateLocations", payload });
  };

  /////////////////////////////////
  // Handle date change
  /////////////////////////////////
  const handleDateChange = (payload) => {
    dispatch({ type: "updateDate", payload });
  };

  /////////////////////////////////
  // Handle project start time
  /////////////////////////////////
  const handleSetProjectStartTime = () => {
    dispatch({ type: "updateProjectStartTime" });
  };

  return (
    <QuoteContext.Provider
      value={{
        ...state,
        serviceType,
        hour,
        period,
        truckSize,
        startingLocationDetails,
        stopOneDetails,
        stopTwoDetails,
        stopThreeDetails,
        disassembly,
        specialtyItems,
        largeItems,
        junkRemoval,
        disassemblyDetails,
        specialtyItemsDetails,
        largeItemsDetails,
        junkRemovalDetails,
        numOf26BoxTrucks,
        numOf20BoxTrucks,
        numOf16BoxTrucks,
        handleFormStep,
        handleResetForm,
        handleCalculateQuote,
        handleUpdateForm,
        handleUpdateLocations,
        handleDateChange,
        handleSetProjectStartTime,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
