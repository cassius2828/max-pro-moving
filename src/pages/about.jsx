import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">About Max Pro Moving</h1>
      <p className="mb-4">
        Max Pro Moving is a locally owned and operated moving company proudly
        based in Tempe, Arizona. We have decades of experience in moving and
        have found the formula to the best service.
      </p>
      <p className="mb-4">
        It all starts with you, the client! Everyone is different, and we
        understand that in order to make your life easier we need to know what
        matters to you most. We will take the time to understand what makes a
        difference to you and offer the best options to fit your approach!
      </p>
      <p className="mb-4">
        A change of your surroundings can be stressful. Our team cares about
        taking the strain off of your back and they are trained to perform with
        the utmost professionalism and quality.
      </p>
      <p className="mb-4">
        At Max Pro Moving AZ we go the extra mile to ensure your belongings are
        protected, your timeline is respected, and your expectations are
        exceeded.
      </p>
      <p className="mb-4">
        We’re proud to serve our Arizona community and look forward to helping
        you with your next move. For questions, quotes, or custom requests, feel
        free to contact us at{" "}
        <a href="mailto:info@azmaxpro.com" className="text-blue-600 underline">
          info@azmaxpro.com
        </a>{" "}
        or directly at{" "}
        <a href="mailto:MaxProMove@gmail.com" className="text-blue-600 underline">
          MaxProMove@gmail.com
        </a>
        .
      </p>
      <button
        onClick={() => navigate(-1)}
        className="p-2 mt-5 rounded-md bg-neutral-900 text-gray-50 text-center"
      >
        Back
      </button>
    </div>
  );
}