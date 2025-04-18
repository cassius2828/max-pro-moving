// netlify/functions/weather.js
const WEATHER_URL = `http://api.weatherstack.com/current?access_key=f2230de878326372f271f23aa5476315&query=New-York`;

export default async function handler(event, context) {
  
  try {
    const res = await fetch(WEATHER_URL);
    const data = await res.json();

    // Always JSON.stringify() your object
    console.log(data, " <-- DATA");
// THIS will make the client see "[object Object]"
return new Response(
  JSON.stringify({
    message: "TEST",
    weather: data,
  }),
  {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }
);
    // return new Response({
    //   statusCode: 200,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     message: "TEST",
    //     weather: data,
    //   }),
    // });
  } catch (err) {
    console.error("weather handler error", err);
    return new Response({
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message }),
    });
  }
}
