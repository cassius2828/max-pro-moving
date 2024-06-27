/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useReducer } from "react";
// import { calculateDistanceTwoLocations } from "../googleAPIs/functions/calculateMovingDistance";

export const QuoteContext = createContext();
const CALC_MOVE_DIST_ENDPOINT = import.meta.env.VITE_CALC_MOVE_DIST_ENDPOINT;
console.log(CALC_MOVE_DIST_ENDPOINT);

const initialFormState = {
  // progress of form
  formSteps: 1,
  // locations
  startingLocation: "",
  multipleStops: false,
  stop1: "",
  stop2: "",
  endLocation: "",
  distance: 0,
  estimatedTravelTime: 0,
  //   sizing
  truckSize: "pickup",
  NumOfWorkers: 2,
  timeForJob: "3",
  //   extra details
  stairs: false,
  listLargeItems: "",
  summaryOfMove: "",
  //   quote
  quoteAmount: 0,
  //   contact info
  firstName: "",
  lastName: "",
  cell: "",
  email: "",
  //   project times
  projectDate: "",
  timeOfDay: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "nextStep":
      return { ...state, formSteps: state.formSteps + 1 };
    case "prevStep":
      return { ...state, formSteps: state.formSteps - 1 };
    case "updateForm":
      return { ...state, [action.payload.name]: action.payload.value };
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
      return state; // Ensure the current state is returned by default
  }
};

export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const handleFormStep = (e, action) => {
    e.preventDefault();

    if (action === "back") {
      if (state.formSteps > 1) {
        dispatch({ type: "prevStep" });
      }
    }
    if (action === "next") {
      if (state.formSteps < 6 && state.formSteps !== 3) {
        dispatch({ type: "nextStep" });
      }
    }
  };

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
  };

  const handleResetForm = () => {
    dispatch({ type: "resetForm" });
  };

  const handleUpdateForm = (payload) => {
    dispatch({ type: "updateForm", payload });
    console.log(state);
  };

  const handleUpdateLocations = (payload) => {
    dispatch({ type: "updateLocations", payload });
  };

  return (
    <QuoteContext.Provider
      value={{
        ...state, // Spread all state keys here
        handleFormStep,
        handleResetForm,
        handleCalculateQuote,
        handleUpdateForm,
        handleUpdateLocations,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
