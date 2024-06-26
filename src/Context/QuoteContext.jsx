/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const QuoteContext = createContext();

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
        return { ...state, [action.payload.formId]: action.payload.place.place_id };
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

  const handleCalculateQuote = () => {
    dispatch({ type: "nextStep" });
  };

  const handleResetForm = () => {
    dispatch({ type: "resetForm" });
  };

  const handleUpdateForm = (payload) => {
    dispatch({ type: "updateForm", payload });
  
  };

  const handleUpdateLocations = (payload) => {
    dispatch({ type: "updateLocations", payload });
console.log(payload.formId)
console.log(payload.place.place_id)
console.log(state)
  }

  return (
    <QuoteContext.Provider
      value={{
        ...state, // Spread all state keys here
        handleFormStep,
        handleResetForm,
        handleCalculateQuote,
        handleUpdateForm,handleUpdateLocations
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
