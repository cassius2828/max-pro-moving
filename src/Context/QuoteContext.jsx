/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const QuoteContext = createContext();

const initialFormState = {
  // progress of form
  formSteps: 1,
  // locations
  startingLocation: "",
  multipleStops: false,
  address1: "",
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
    case "resetForm":
      return initialFormState;

    default:
      return initialFormState;
  }
};

export const QuoteProvider = ({ children }) => {
  const [{ formSteps,truckSize }, dispatch] = useReducer(reducer, initialFormState);


  const handleFormStep = (e, action) => {
    e.preventDefault();

    if (action === "back") {
      if (formSteps > 1) {
        dispatch({ type: "prevStep" });
      }
    }
    if (action === "next") {
      if (formSteps < 6 && formSteps !== 3) {
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
  return (
    <QuoteContext.Provider
      value={{
        formSteps,truckSize,
        handleFormStep,
        handleResetForm,
        handleCalculateQuote,
        handleUpdateForm,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
