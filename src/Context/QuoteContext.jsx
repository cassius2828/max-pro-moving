/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

// import { calculateDistanceTwoLocations } from "../googleAPIs/functions/calculateMovingDistance";

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
  // ────────────────────────────────────────────────────────────
  // FORM PROGRESS & OVERALL SETTINGS
  formSteps: 1,
  serviceType: "moving",
  multipleStops: false,
  distance: 0,
  estimatedTravelTime: 0,

  // ────────────────────────────────────────────────────────────
  // PICKUP LOCATION
  startingLocation: {},
  startingLocationDetails: "",
  startingLocationStairFlights: "",

  // ────────────────────────────────────────────────────────────
  // INTERMEDIATE STOPS
  // Stop #1
  stop1: {},
  stop1Details: "",
  stop1StairFlights: "",
  // Stop #2
  stop2: {},
  stop2Details: "",
  stop2StairFlights: "",
  // Stop #3
  stop3: {},
  stop3Details: "",
  stop3StairFlights: "",

  // ────────────────────────────────────────────────────────────
  // DROP‑OFF LOCATION
  endLocation: {},
  endLocationDetails: "",
  endLocationStairFlights: "",

  // ────────────────────────────────────────────────────────────
  // VEHICLE & CREW SIZING
  truckSize: "pickup",
  NumOfWorkers: 2,
  timeForJob: "3", // estimated hours

  // ────────────────────────────────────────────────────────────
  // TRUCK COUNT
  numOf26BoxTrucks: "0",
  numOf20BoxTrucks: "0",
  numOf16BoxTrucks: "0",

  // ────────────────────────────────────────────────────────────
  // NON‑MOVING SERVICES
  singleItemDetails: "",
  junkRemovalDetails: "",

  // ────────────────────────────────────────────────────────────
  // QUOTE & SUMMARY
  quoteAmount: 0,
  quoteFormSuccess: false,
  summaryOfMove: "",

  // ────────────────────────────────────────────────────────────
  // CONTACT INFORMATION
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",

  // ────────────────────────────────────────────────────────────
  // DATE & TIME
  projectDate: "",
  hour: "",
  period: "AM",
  projectStartTime: "",
timeOfDay: '',
  // ────────────────────────────────────────────────────────────
  // ADDITIONAL SERVICES (yes/no)
  disassembly: "no",
  specialtyItems: "no",
  largeItems: "no",
  junkRemoval: "no",

  // ────────────────────────────────────────────────────────────
  // ADDITIONAL SERVICE DETAILS
  disassemblyDetails: "",
  specialtyItemsDetails: "",
  largeItemsDetails: "",

    // FIELD‑LEVEL ERROR FLAGS
    startingLocationError: false,
    startingLocationDetailsError: false,
    startingLocationStairFlightsError: false,
    stop1Error: false,
    stop1DetailsError: false,
    stop1StairFlightsError: false,
    stop2Error: false,
    stop2DetailsError: false,
    stop2StairFlightsError: false,
    stop3Error: false,
    stop3DetailsError: false,
    stop3StairFlightsError: false,
    endLocationError: false,
    endLocationDetailsError: false,
    endLocationStairFlightsError: false,
    firstNameError: false,
    lastNameError: false,
    phoneError: false,
    emailError: false,
    messageError: false,
    projectDateError: false,
    timeOfDayError:false,
    hourError: false,
    disassemblyDetailsError: false,
    specialtyItemsDetailsError: false,
    largeItemsDetailsError: false,
    junkRemovalDetailsError: false,
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
    case "updateQuoteAmount":
      return { ...state, quoteAmount: action.payload };
    case "updateQuoteFormSuccess":
      return { ...state, quoteFormSuccess: action.payload };
    case "resetQuoteAmount":
      return { ...state, quoteAmount: 0, quoteFormSuccess: false };
    case "updateProjectStartTime":
      return { ...state, projectStartTime: state.hour + " " + state.period };
    case "updateLocations":
      return {
        ...state,
        [action.payload.formId]: action.payload.place,
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
  const [missingReqFields, setMissingReqFields] = useState(true);

  const {
    // ────────────────────────────────────────────────────────────
    // MOVING DETAILS & SCHEDULE
    serviceType,
    hour,
    period,
    projectDate,
    timeOfDay,
    truckSize,
    quoteAmount,
    quoteFormSuccess,
    // ────────────────────────────────────────────────────────────
    // LOCATIONS & STOPS
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

    // ────────────────────────────────────────────────────────────
    // OPTIONAL SERVICES & ITEMS
    disassembly,
    disassemblyDetails,
    specialtyItems,
    specialtyItemsDetails,
    largeItems,
    largeItemsDetails,
    junkRemoval,
    junkRemovalDetails,
    singleItemDetails,

    // ────────────────────────────────────────────────────────────
    // CONTACT INFO
    firstName,
    lastName,
    email,
    phone,
    message,

    // ────────────────────────────────────────────────────────────
    // EQUIPMENT COUNTS
    numOf26BoxTrucks,
    numOf20BoxTrucks,
    numOf16BoxTrucks,

    // ────────────────────────────────────────────────────────────
    // FORM‑LEVEL STATE
    formErrorState,
    formSteps,
    // ────────────────────────────────────────────────────────────
    // FIELD‑LEVEL ERROR FLAGS
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
    timeOfDayError,
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
    console.log(name, " <-- name val");
    console.log(boolean, " <-- boolean val");
    console.log(state);
  };

  ///////////////////////////
  // Handle Set local error (input)
  ///////////////////////////
  const handleSetLocalError = (inputsArray) => {
    inputsArray.forEach((input) => {
      console.log(input, " <-- input ");
      handleUpdateFormError(input.name, input.value);
    });
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

  const handleSetInvalidInputs = (inputErrorsArray) => {
    if (inputErrorsArray.includes(true)) return true;
    else return false;
  };

  ///////////////////////////
  // Update Quote Amount
  ///////////////////////////
  const handleUpdateQuoteAmount = (payload) => {
    dispatch({ type: "updateQuoteAmount", payload });
  };

  ///////////////////////////
  // Reset Quote Amount
  ///////////////////////////

  const handleResetQuoteAmount = () => {
    dispatch({ type: "resetQuoteAmount" });
  };
  ///////////////////////////
  // Update Quote Form Success
  ///////////////////////////
  const handleUpdateQuoteFormSuccess = (payload) => {
    dispatch({ type: "updateQuoteFormSuccess", payload });
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

  const isObjEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <QuoteContext.Provider
      value={{
        // ────────────────────────────────────────────────────────────────
        // MOVING DETAILS & SCHEDULE
        serviceType,
        hour,
        period,
        projectDate,
        timeOfDay,
        truckSize,
        quoteAmount,
        quoteFormSuccess,
        // ────────────────────────────────────────────────────────────────
        // LOCATIONS
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

        // ────────────────────────────────────────────────────────────────
        // OPTIONAL SERVICES & ITEMS
        disassembly,
        disassemblyDetails,
        specialtyItems,
        specialtyItemsDetails,
        largeItems,
        largeItemsDetails,
        junkRemoval,
        junkRemovalDetails,
        singleItemDetails,

        // ────────────────────────────────────────────────────────────────
        // CONTACT INFO
        firstName,
        lastName,
        email,
        phone,
        message,

        // ────────────────────────────────────────────────────────────────
        // EQUIPMENT COUNTS
        numOf26BoxTrucks,
        numOf20BoxTrucks,
        numOf16BoxTrucks,

        // ────────────────────────────────────────────────────────────────
        // FORM‑LEVEL ERROR STATE
        formErrorState,
        missingReqFields,
        formSteps,
        // ────────────────────────────────────────────────────────────────
        // FIELD‑LEVEL ERROR FLAGS
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
        timeOfDayError,
        hourError,
        disassemblyDetailsError,
        specialtyItemsDetailsError,
        largeItemsDetailsError,
        junkRemovalDetailsError,

        // ────────────────────────────────────────────────────────────────
        // FORM NAVIGATION
        handleFormStep,

        // ────────────────────────────────────────────────────────────────
        // FORM RESET
        handleResetForm,

        // ────────────────────────────────────────────────────────────────
        // QUOTE AMOUNT MANAGEMENT
        handleUpdateQuoteAmount,
        handleResetQuoteAmount,
        handleUpdateQuoteFormSuccess,
        // ────────────────────────────────────────────────────────────────
        // FORM UPDATES
        handleUpdateForm,
        handleUpdateLocations,
        handleDateChange,
        handleSetProjectStartTime,

        // ────────────────────────────────────────────────────────────────
        // ERROR HANDLERS
        handleSetLocalError,
        handleSetInvalidInputs,
        handleUpdateFormError,
        setMissingReqFields,

        // ────────────────────────────────────────────────────────────────
        // CALCULATION & DATA FETCH
        handleCalculateQuote,
        fetchMatrixDetails,
        isObjEmpty,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
