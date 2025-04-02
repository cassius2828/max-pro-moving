import { MailtrapClient } from "mailtrap"

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "<YOUR-TOKEN-HERE>";
const SENDER_EMAIL = "<SENDER@YOURDOMAIN.COM>";
const RECIPIENT_EMAIL = "<RECIPIENT@EMAIL.COM>";

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to Mailtrap Sending!",
  })
  .then(console.log)
  .catch(console.error);