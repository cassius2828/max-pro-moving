import axios from "axios";

const MATRIX_BASE_URL = "https://maps.googleapis.com/maps/api/distancematrix";
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
console.log(GOOGLE_PLACES_API_KEY, ' <-- google palces apiu key')
export const handler = async (event, context) => {
  // Parse the incoming request body (assumes JSON)
  const { startingLocation, stop1, stop2, stop3, endLocation } = JSON.parse(event.body);

  // Ensure the required parameters are provided
  if (!startingLocation || (!stop1 && !endLocation)) {
    return {
      statusCode: 400,
      body: "Inadequate location params passed to function",
    };
  }

  // Initialize the full URL (if needed for logging/debugging)
  let FULL_URL;

  try {
    // MULTI-STOP-TRIP: 3 stops
    if (stop2 && stop3) {
      // Make sequential axios requests for the multi-stop trip
      const response1 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${startingLocation}`,
          destinations: `place_id:${stop1}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      const response2 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop1}`,
          destinations: `place_id:${stop2}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      const response3 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop2}`,
          destinations: `place_id:${stop3}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      if (response1.data.status === "OK" && response2.data.status === "OK") {
        // Calculate distances and durations for each trip segment
        const distanceValueMeters1 = response1.data.rows[0].elements[0].distance.value;
        const durationValueSeconds1 = response1.data.rows[0].elements[0].duration.value;
        const distanceValueMeters2 = response2.data.rows[0].elements[0].distance.value;
        const durationValueSeconds2 = response2.data.rows[0].elements[0].duration.value;
        const distanceValueMeters3 = response3.data.rows[0].elements[0].distance.value;
        const durationValueSeconds3 = response3.data.rows[0].elements[0].duration.value;

        const totalDistanceMeters = distanceValueMeters1 + distanceValueMeters2 + distanceValueMeters3;
        const totalDurationSeconds = durationValueSeconds1 + durationValueSeconds2 + durationValueSeconds3;

        return {
          statusCode: 200,
          body: JSON.stringify({
            distanceValueMeters: totalDistanceMeters,
            durationValueSeconds: totalDurationSeconds,
          }),
        };
      } else {
        return {
          statusCode: 500,
          body: `Error: ${response1.data.error_message || response2.data.error_message}`,
        };
      }
    }
    // TWO-STOP-TRIP
    else if (stop2) {
      const response1 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${startingLocation}`,
          destinations: `place_id:${stop1}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      const response2 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop1}`,
          destinations: `place_id:${stop2}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      if (response1.data.status === "OK" && response2.data.status === "OK") {
        const distanceValueMeters1 = response1.data.rows[0].elements[0].distance.value;
        const durationValueSeconds1 = response1.data.rows[0].elements[0].duration.value;
        const distanceValueMeters2 = response2.data.rows[0].elements[0].distance.value;
        const durationValueSeconds2 = response2.data.rows[0].elements[0].duration.value;

        const totalDistanceMeters = distanceValueMeters1 + distanceValueMeters2;
        const totalDurationSeconds = durationValueSeconds1 + durationValueSeconds2;

        return {
          statusCode: 200,
          body: JSON.stringify({
            distanceValueMeters: totalDistanceMeters,
            durationValueSeconds: totalDurationSeconds,
          }),
        };
      } else {
        return {
          statusCode: 500,
          body: `Error: ${response1.data.error_message || response2.data.error_message}`,
        };
      }
    }
    // SINGLE-STOP-TRIP
    else {
      FULL_URL = `${MATRIX_BASE_URL}/json?origins=place_id:${startingLocation}&destinations=place_id:${endLocation}&units=imperial&key=${GOOGLE_PLACES_API_KEY}`;

      const response = await axios.get(FULL_URL);

      if (response.data.status === "OK") {
        const distanceValueMeters = response.data.rows[0].elements[0].distance.value;
        const durationValueSeconds = response.data.rows[0].elements[0].duration.value;

        return {
          statusCode: 200,
          body: JSON.stringify({ distanceValueMeters, durationValueSeconds }),
        };
      } else {
        return {
          statusCode: 500,
          body: `Error: ${response.data.error_message}`,
        };
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Request failed: ${error.message}`,
    };
  }
};