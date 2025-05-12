import { useNavigate } from "react-router-dom";

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Effective Date: May 3, 2025</p>
      <p className="mb-4">
        Welcome to Max Pro Moving, the team that makes moving easy through
        project planning, labor services and more! By accessing or using our
        website and services, you agree to be bound by the terms below.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Booking and Cancellations</strong>: All bookings require
          confirmation. Cancellations must be made at least 48 hours in advance
          to avoid the cancellation fee of 100% of deposit.
        </li>
        <li>
          <strong>Payment</strong>: Payment is due upon completion of services.
          We accept major cards and cash.
        </li>
        <li>
          <strong>Conduct</strong>: Abusive or inappropriate behavior will not
          be tolerated. We reserve the right to terminate service.
        </li>
        <li>
          <strong>Modifications</strong>: Terms may be updated. Continued use
          signifies acceptance of changes.
        </li>
        <li>
          <strong>Information Sharing</strong>: Info you submit may be shared to
          our trusted partners only upon your acceptance.
        </li>
        <li>
          <strong>Hourly Service</strong>: Hourly services are time based. The
          clock will stop for breaks and lunch breaks or at final project
          completion only. Clients have the right to dictate when to end the
          services, though services may not be ended while equipment provided by
          the company is still in use.
        </li>
      </ul>
      <button
        onClick={() => navigate(-1)}
        className="p-2 mt-5 rounded-md bg-neutral-900 text-gray-50 text-center"
      >
        Back
      </button>
    </div>
  );
}