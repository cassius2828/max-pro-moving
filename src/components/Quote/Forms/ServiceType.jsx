/* eslint-disable react/prop-types */
import { useQuoteContext } from "../../../customHooks/useQuoteContext";
import BackAndNextBtns from "../QuoteBtns/BackAndNextBtns";

const ServiceType = () => {
  const { serviceType, handleUpdateForm } = useQuoteContext();

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6 sm:p-8">
      {/* Dropdown for service type*/}
      <div className="mt-6">
        <label
          htmlFor="serviceType"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Service Type
        </label>
        <select
          className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
          onChange={(e) => handleUpdateForm(e.target)}
          value={serviceType}
          name="serviceType"
          id="serviceType"
        >
          <option value="moving">Moving</option>
          <option value="singleItem">Single Item Delivery</option>
          <option value="junkRemoval">Junk Removal (Only)</option>
        </select>
      </div>
      {serviceType === "moving" ? (
        <VehicleConfirmation />
      ) : (
        <ItemTextArea serviceType={serviceType} />
      )}

      <BackAndNextBtns />
    </div>
  );
};
export default ServiceType;

export const ItemTextArea = ({ serviceType = "singleItem" }) => {
  const tempValue = "";

  const handleUpdateForm = () => {};
  return (
    <>
      {serviceType === "singleItem" ? (
        <div className="mt-6">
          <label
            htmlFor="singleItem"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Single Item Details
          </label>

          <textarea
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
            onChange={(e) => handleUpdateForm(e.target)}
            value={tempValue}
            name="singleItem"
            id="singleItem"
          ></textarea>
        </div>
      ) : (
        <div className="mt-6">
          <label
            htmlFor="junkRemoval"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Junk Removal Items
          </label>

          <textarea
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
            onChange={(e) => handleUpdateForm(e.target)}
            value={tempValue}
            name="junkRemoval"
            id="junkRemoval"
          ></textarea>
        </div>
      )}
    </>
  );
};

export const VehicleConfirmation = () => {
const {handleUpdateForm,truckSize} = useQuoteContext()

  return (
    <>
      <div className="mt-6">
        <label
          htmlFor="truckSize"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Do you need trucks and transportation?
        </label>
        <select
          className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm/6"
          onChange={(e) => handleUpdateForm(e.target)}
          value={truckSize}
          name="truckSize"
          id="truckSize"
        >
          <option value="yes-trucks">
            Yes, I need trucks and transportation serviced to me
          </option>
          <option value="provide-own">
            I will provide all trucks and transportation myself
          </option>
          <option value="no-trucks">
            I do not need trucks or transportation
          </option>
        </select>
      </div>
    </>
  );
};
