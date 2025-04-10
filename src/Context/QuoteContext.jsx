/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useReducer, useState } from "react";

// import { calculateDistanceTwoLocations } from "../googleAPIs/functions/calculateMovingDistance";
const NETLIFY_FN_URL = `http://localhost:8888/.netlify/functions/matrix`;
export const QuoteContext = createContext();
const CALC_MOVE_DIST_ENDPOINT = import.meta.env.VITE_CALC_MOVE_DIST_ENDPOINT;
console.log(CALC_MOVE_DIST_ENDPOINT);

const excludeKeys = [
  "formSteps",
  "serviceType",
  "distance",
  "estimatedTravelTime",
  "multipleStops",
  "truckSize",
  "numOfWorkers",
  "timeForJob",
  "summaryOfMove",
  "quoteAmount",
  "period",
  "projectStartTime",
  "disassembly",
  "specialtyItems",
  "largeItems",
  "junkRemoval",
];

const boxTruckRegex = /^numOf.*BoxTrucks$/;

const initialFormState = {
  // progress of form
  formSteps: 1,
  // service type
  serviceType: "moving",
  // locations
  multipleStops: false,
  distance: 0,
  estimatedTravelTime: 0,
  // * start
  startingLocation: "",
  startingLocationDetails: "",
  startingLocationStairFlights: "",
  // * stop 1
  stop1: "",
  stop1Details: "",
  stop1StairFlights: "",
  // * stop 2
  stop2: "",
  stop2Details: "",
  stop2StairFlights: "",
  // * stop 3
  stop3: "",
  stop3Details: "",
  stop3StairFlights: "",
  // * end location (no additional stops)
  endLocation: "",
  endLocationDetails: "",
  endLocationStairFlights: "",
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

const initialFormErrorState = Object.keys(initialFormState).reduce(
  (acc, val) => {
    if (excludeKeys.includes(val) || boxTruckRegex.test(val)) {
      return acc;
    }
    acc[val + "Error"] = false;
    return acc;
  },
  {}
);

const appState = { ...initialFormState, ...initialFormErrorState };

/////////////////////
// Reducer function
/////////////////////
const reducer = (state, action) => {
  switch (action.type) {
    case "nextStep":
      return { ...state, formSteps: state.formSteps + 1 };
    case "skipTrucks":
      return { ...state, formSteps: state.formSteps + 2 };
    case "skipTrucksPrev":
      return { ...state, formSteps: state.formSteps - 2 };
    case "prevStep":
      return { ...state, formSteps: state.formSteps - 1 };
    case "updateForm":
      return { ...state, [action.payload.name]: action.payload.value };
    case "updateFormError":
      return {
        ...state,
        [action.payload.name]: action.payload.boolean,
      };
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
      return appState;
    default:
      return state;
  }
};

//////////////////////////////////
// Quote Provider Component
//////////////////////////////////
export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appState);
  const {
    serviceType,
    hour,
    period,
    projectDate,
    truckSize,
    startingLocation,
    startingLocationDetails,
    stop1,
    stop2,
    stop3,
    stop1Details,
    stop2Details,
    stop3Details,
    endLocation,
    endLocationDetails,
    endLocationStairFlights,
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
    formErrorState,
    // error states
    startingLocationError,
    startingLocationDetailsError,
    startingLocationStairFlightsError,
    stop1Error,
    stop1DetailsError,
    stop1StairFlightsError,
    stop2Error,
    stop2DetailsError,
    stop2StairFlightsError,
    stop3Error,
    stop3DetailsError,
    stop3StairFlightsError,
    endLocationError,
    endLocationDetailsError,
    endLocationStairFlightsError,
    firstNameError,
    lastNameError,
    phoneError,
    emailError,
    messageError,
    projectDateError,
    hourError,
    disassemblyDetailsError,
    specialtyItemsDetailsError,
    largeItemsDetailsError,
    junkRemovalDetailsError,
  } = state;
  /////////////////////////////////
  // Handle form step navigation
  /////////////////////////////////
  // adding skipPastDirection creates consistency when skipping a certain direction,
  // but allowing normal nav for other direction
  const handleFormStep = (e, action, skipPast, skipPastDirection) => {
    e.preventDefault();

    if (action === "back") {
      if (skipPast && skipPastDirection === action) {
        dispatch({ type: `${skipPast}Prev` });
      } else if (state.formSteps > 1) {
        dispatch({ type: "prevStep" });
      }
    }
    if (action === "next") {
      if (skipPast && skipPastDirection === action) {
        dispatch({ type: skipPast });
      } else if (state.formSteps < 7) {
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
  // Handle form error update
  /////////////////////////////////
  const handleUpdateFormError = (name, boolean) => {
    dispatch({ type: "updateFormError", payload: { name, boolean } });
    console.log(boolean, " <-- boolean val");
    console.log(firstNameError, " <-- firstNameError");
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

  ///////////////////////////
  // Fetch Matrix Distance and Duration
  ///////////////////////////
  const fetchMatrixDetails = async (
    startingLocation,
    endLocation,
    stop1,
    stop2,
    stop3
  ) => {
    const body = {
      startingLocation,
      endLocation,
      stop1,
      stop2,
      stop3,
    };
    try {
      const response = await axios.post(NETLIFY_FN_URL, body);
      return response.data;
    } catch (err) {
      console.error(err);
      console.log(
        "Unable to fetch matrix details from netlify functions. Error:",
        err
      );
    }
  };

  return (
    <QuoteContext.Provider
      value={{
        ...state,
        serviceType,
        hour,
        period,
        projectDate,
        truckSize,
        startingLocation,
        startingLocationDetails,
        stop1,
        stop2,
        stop3,
        stop1Details,
        stop2Details,
        stop3Details,
        endLocation,
        endLocationDetails,
        endLocationStairFlights,
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
        formErrorState,
        // error states
        startingLocationError,
        startingLocationDetailsError,
        startingLocationStairFlightsError,
        stop1Error,
        stop1DetailsError,
        stop1StairFlightsError,
        stop2Error,
        stop2DetailsError,
        stop2StairFlightsError,
        stop3Error,
        stop3DetailsError,
        stop3StairFlightsError,
        endLocationError,
        endLocationDetailsError,
        endLocationStairFlightsError,
        firstNameError,
        lastNameError,
        phoneError,
        emailError,
        messageError,
        projectDateError,
        hourError,
        disassemblyDetailsError,
        specialtyItemsDetailsError,
        largeItemsDetailsError,
        junkRemovalDetailsError,
        handleFormStep,
        handleUpdateFormError,
        handleResetForm,
        handleCalculateQuote,
        handleUpdateForm,
        handleUpdateLocations,
        handleDateChange,
        handleSetProjectStartTime,
        fetchMatrixDetails,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
