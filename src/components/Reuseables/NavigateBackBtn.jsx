import { useNavigate } from "react-router-dom";

const NavigateBackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-8 inline-block bg-neutral-600 hover:bg-neutral-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
      to={"/"}
    >
      Back
    </button>
  );
};
export default NavigateBackBtn;
