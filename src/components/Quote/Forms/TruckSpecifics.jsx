import React from "react";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";

const TruckSpecifics = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleUpdateForm = (value) => {
    setSelectedValue(value);
    // You can dispatch this value to your form context or state management here
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      {/* 26 ft */}
      <div className="mt-6">
        <label className="block text-sm/6 font-medium text-gray-900">
          How Many 26' Box Trucks?
        </label>
        <div className="mt-3 space-y-2">
          {["0", "1", "2", "3+", "recommend"].map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 text-gray-900"
            >
              <input
                type="radio"
                name="truckSize"
                value={option}
                checked={selectedValue === option}
                onChange={(e) => handleUpdateForm(e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>
                {option === "recommend"
                  ? "Please Recommend"
                  : `${option} Truck${option === "1" ? "" : "s"}`}
              </span>
            </label>
          ))}
        </div>
      </div>
      {/* 16 to 20 ft */}
      <div className="mt-6">
        <label className="block text-sm/6 font-medium text-gray-900">
          How Many 16' to 20' Box Trucks?
        </label>
        <div className="mt-3 space-y-2">
          {["0", "1", "2", "3+", "recommend"].map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 text-gray-900"
            >
              <input
                type="radio"
                name="truckSize"
                value={option}
                checked={selectedValue === option}
                onChange={(e) => handleUpdateForm(e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>
                {option === "recommend"
                  ? "Please Recommend"
                  : `${option} Truck${option === "1" ? "" : "s"}`}
              </span>
            </label>
          ))}
        </div>
      </div>
      <BackAndNextBtns />
    </div>
  );
};

export default TruckSpecifics;
