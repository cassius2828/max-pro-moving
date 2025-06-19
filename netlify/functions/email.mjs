// netlify/functions/send-quote.js
import { format } from "date-fns";
// Import Mailtrap client to send templated emails
import { MailtrapClient } from "mailtrap";
import {
  convertBoxTruckToNumber,
  formatPhoneNumber,
  getNumOfMovers,
} from "../../src/utils";

// UUIDs for the Mailtrap templates:
const customerTemplateID = "3ece9e65-b369-481a-8557-7d16607537ce";
const staffTemplateID = "6784645a-6d8c-4176-9adb-4dfe8e94f20a";

export default async function handler(req, context) {
  // ────────────────────────────────────────────────────────────────────────────────
  // 1) Request & context logging for debugging
  console.log(req, " <-- raw Fetch Request object");
  console.log(context, " <-- Netlify context (geo, site, etc.)");
  console.log("🔍 req headers:", Object.fromEntries(req.headers));

  // ────────────────────────────────────────────────────────────────────────────────
  // 2) Parse and validate JSON payload
  let payload;
  try {
    // Read the request body as JSON
    payload = await req.json();
    console.log("✅ Parsed JSON body:", payload);
  } catch (err) {
    console.error("❌ Failed to parse JSON:", err);
    // Return 400 if the body wasn't valid JSON
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Destructure all expected fields from the parsed payload
  const {
    firstName,
    lastName,

    phone,
    email,
    message,
    startingLocationStairFlights,
    endLocationStairFlights,
    stop1StairFlights,
    stop2StairFlights,
    stop3StairFlights,
    quoteAmount,
    serviceType,
    startingLocation,
    endLocation,
    startingLocationDetails,
    endLocationDetails,
    stop1,
    stop2,
    stop3,
    stop1Details,
    stop2Details,
    stop3Details,
    numOf16BoxTrucks,
    numOf20BoxTrucks,
    numOf26BoxTrucks,
    projectDate,
    timeOfDay,
    singleItemDetails,
    largeItemsDetails,
    junkRemovalDetails,
    specialtyItemsDetails,
    disassemblyDetails,
    distance,
  } = payload;

  // ────────────────────────────────────────────────────────────────────────────────
  // 3) Build the template variables objects for each template

  // Data for the customer-facing email template
  const customerTemplateDataObj = {
    first_name: firstName,
    last_name: lastName,
    quote_amount: `$${quoteAmount}`,
    serviceType,
    numOf26BoxTrucks,
    numOf20BoxTrucks,
    numOf16BoxTrucks,
    projectDate: format(new Date(projectDate), "MMMM do, yyyy"),
    projectStartTime: timeOfDay,
    distance,
    startingLocation,
    startingLocationStairFlights,
    // optional fields
    endLocationStairFlights: endLocationStairFlights || "N/A",
    stop1StairFlights: stop1StairFlights || "N/A",
    stop2StairFlights: stop2StairFlights || "N/A",
    stop3StairFlights: stop3StairFlights || "N/A",
    endLocation: endLocation || "N/A",
    stop1: stop1 || "N/A",
    stop2: stop2 || "N/A",
    stop3: stop3 || "N/A",
    startingLocationDetails: startingLocationDetails || "N/A",
    endLocationDetails: endLocationDetails || "N/A",
    stop1Details: stop1Details || "N/A",
    stop2Details: stop2Details || "N/A",
    stop3Details: stop3Details || "N/A",
    singleItemDetails: singleItemDetails || "N/A",
    largeItemsDetails: largeItemsDetails || "N/A",
    junkRemovalDetails: junkRemovalDetails || "N/A",
    specialtyItemsDetails: specialtyItemsDetails || "N/A",
    disassemblyDetails: disassemblyDetails || "N/A",
    message: message || "N/A",
  };

  const sumOfBoxTrucks =
    convertBoxTruckToNumber(numOf16BoxTrucks) +
    convertBoxTruckToNumber(numOf20BoxTrucks) +
    convertBoxTruckToNumber(numOf26BoxTrucks);

  // Data for the staff-facing email template (with extra details)
  const staffTemplateDataObj = {
    ...customerTemplateDataObj,
    numOfWorkers: getNumOfMovers(sumOfBoxTrucks),
    phone: formatPhoneNumber(phone),
    email,
  };

  // ────────────────────────────────────────────────────────────────────────────────
  // 4) Validate required fields, then configure the send calls
  try {
    if (!email) {
      throw new Error("Missing `email` in body");
    }

    // Common sender info
    const sender = {
      name: "Detailed Moving Quote",
      email: "info@azmaxpro.com",
    };

    // Recipient lists
    const clientRecipients = [{ email }];
    const staffRecipients = [
      // { email: "kdottt28@gmail.com" },
      { email: "maxpromove@gmail.com" },
    ];

    // Mailtrap send config for the client
    const sendToClientConfig = {
      from: sender,
      to: clientRecipients,
      template_uuid: customerTemplateID,
      template_variables: customerTemplateDataObj,
    };

    // Mailtrap send config for the staff
    const sendToStaffConfig = {
      from: sender,
      to: staffRecipients,
      template_uuid: staffTemplateID,
      template_variables: staffTemplateDataObj,
    };
    // Initialize Mailtrap client with the domain token
    const client = new MailtrapClient({
      // eslint-disable-next-line no-undef
      token: process.env.MT_MPM_DOMAIN_TOKEN,
    });

    // Send both emails in parallel
    // const sendToClient = client.send(sendToClientConfig);
    // add sendToClient to promise to re-enable client emails
    const sendToStaff = client.send(sendToStaffConfig);
    const results = await Promise.all([sendToStaff]);

    console.log("📧 Mailtrap results:", results);

    // ────────────────────────────────────────────────────────────────────────────────
    // 5) Return success response
    return new Response(JSON.stringify({ success: true, results }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Log and return any errors that occur during send
    console.error("send-quote error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
