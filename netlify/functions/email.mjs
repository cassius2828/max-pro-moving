// netlify/functions/send-quote.js

// Import Mailtrap client to send templated emails
import { MailtrapClient } from "mailtrap";

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
    numOfWorkers,
    phone,
    startingLocationStairFlights,
    endLocationStairFlights,
    stop1StairFlights,
    stop2StairFlights,
    stop3StairFlights,
    quoteAmount,
    serviceType,
    startingLocation,
    endLocation,
    stop1,
    stop2,
    numOf16BoxTrucks,
    numOf20BoxTrucks,
    numOf26BoxTrucks,
    projectDate,
    projectStartTime,
    additionalItems,
    distance,
    email, // the client’s email address
  } = payload;

  // ────────────────────────────────────────────────────────────────────────────────
  // 3) Build the template variables objects for each template

  // Data for the customer-facing email template
  const customerTemplateDataObj = {
    first_name: firstName,
    last_name: lastName,
    quote_amount: quoteAmount,
    serviceType,
    startingLocation,
    endLocation,
    stop1,
    stop2,
    numOf26BoxTrucks,
    numOf20BoxTrucks,
    numOf16BoxTrucks,
    projectDate,
    projectStartTime,
    additionalItems,
    distance,
  };

  // Data for the staff-facing email template (with extra details)
  const staffTemplateDataObj = {
    ...customerTemplateDataObj,
    numOfWorkers,
    phone,
    startingLocationStairFlights,
    endLocationStairFlights,
    stop1StairFlights,
    stop2StairFlights,
    stop3StairFlights,
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
    const staffRecipients = [{ email: "BaronLimaLLC@gmail.com" }];

    // Mailtrap send config for the client
    const sendToClientConfig = {
      from: sender,
      to: clientRecipients,
      template_uuid: customerTemplateID,
      template_variables: customerTemplateDataObj,
      subject: "Your Detailed Quote",
      text: ``,
      category: "Quotes",
    };

    // Mailtrap send config for the staff
    const sendToStaffConfig = {
      from: sender,
      to: staffRecipients,
      template_uuid: staffTemplateID,
      template_variables: staffTemplateDataObj,
      subject: `Moving Details from ${firstName} ${lastName}`,
      text: ``,
      category: "Customer Moving Details",
    };

    // Initialize Mailtrap client with the domain token
    const client = new MailtrapClient({
      token: process.env.MT_MPM_DOMAIN_TOKEN,
    });

    // Send both emails in parallel
    const sendToClient = client.send(sendToClientConfig);
    const sendToStaff = client.send(sendToStaffConfig);
    const results = await Promise.all([sendToClient, sendToStaff]);

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
