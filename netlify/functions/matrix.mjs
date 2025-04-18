import axios from "axios";

const MATRIX_BASE_URL = "https://maps.googleapis.com/maps/api/distancematrix";
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export const handler = async (event, context) => {
  const { startingLocation, stop1, stop2, stop3, endLocation } = JSON.parse(
    event.body
  );

  if (!startingLocation || (!stop1 && !endLocation)) {
    return {
      statusCode: 400,
      body: "Inadequate location params passed to function",
    };
  }

  try {
    // TODO: REview the logix, i believe these steps depend on each other so we cannot run them concurrently i think
    // ───────────────────────────────────────────────────
    // MULTI‑STOP‑TRIP: 3 stops
    // ───────────────────────────────────────────────────
    if (stop2 && stop3) {
      const p1 = axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${startingLocation}`,
          destinations: `place_id:${stop1}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });
      const p2 = axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop1}`,
          destinations: `place_id:${stop2}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });
      const p3 = axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop2}`,
          destinations: `place_id:${stop3}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      // 2) Await all three in one go—this runs them concurrently
      const [r1, r2, r3] = await Promise.all([p1, p2, p3]);

      if (
        r1.data.status === "OK" &&
        r2.data.status === "OK" &&
        r3.data.status === "OK"
      ) {
        // extract numeric values
        const d1 = r1.data.rows[0].elements[0].distance.value;
        const t1 = r1.data.rows[0].elements[0].duration.value;
        const d2 = r2.data.rows[0].elements[0].distance.value;
        const t2 = r2.data.rows[0].elements[0].duration.value;
        const d3 = r3.data.rows[0].elements[0].distance.value;
        const t3 = r3.data.rows[0].elements[0].duration.value;

        const totalDistanceMeters = d1 + d2 + d3;
        const totalDurationSeconds = t1 + t2 + t3;

        return {
          statusCode: 200,
          body: JSON.stringify({
            // CHANGED: wrap totals in same distance/duration objects
            distance: {
              distanceValueMeters: totalDistanceMeters,
            },
            duration: {
              durationValueSeconds: totalDurationSeconds,
            },
          }),
        };
      } else {
        return {
          statusCode: 500,
          body: `Error: ${
            r1.data.error_message ||
            r2.data.error_message ||
            r3.data.error_message
          }`,
        };
      }
    }
    // TODO: REview the logix, i believe these steps depend on each other so we cannot run them concurrently i think
    // ───────────────────────────────────────────────────
    // TWO‑STOP‑TRIP: 2 stops
    // ───────────────────────────────────────────────────
    else if (stop2) {
      const p1 = axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${startingLocation}`,
          destinations: `place_id:${stop1}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });
      const p2 = axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop1}`,
          destinations: `place_id:${stop2}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      const [r1, r2] = await Promise.all([p1, p2]);
      if (r1.data.status === "OK" && r2.data.status === "OK") {
        // extract numeric values
        const d1 = r1.data.rows[0].elements[0].distance.value;
        const t1 = r1.data.rows[0].elements[0].duration.value;
        const d2 = r2.data.rows[0].elements[0].distance.value;
        const t2 = r2.data.rows[0].elements[0].duration.value;

        const totalDistanceMeters = d1 + d2;
        const totalDurationSeconds = t1 + t2;

        return {
          statusCode: 200,
          body: JSON.stringify({
            // CHANGED: wrap totals in same distance/duration objects
            distance: {
              distanceValueMeters: totalDistanceMeters,
            },
            duration: {
              durationValueSeconds: totalDurationSeconds,
            },
          }),
        };
      } else {
        return {
          statusCode: 500,
          body: `Error: ${r1.data.error_message || r2.data.error_message}`,
        };
      }
    }

    // ───────────────────────────────────────────────────
    // SINGLE‑STOP‑TRIP: 1 stop
    // ───────────────────────────────────────────────────
    else {
      const FULL_URL =
        `${MATRIX_BASE_URL}/json?origins=place_id:${startingLocation}` +
        `&destinations=place_id:${endLocation}&units=imperial&key=${GOOGLE_PLACES_API_KEY}`;
      const response = await axios.get(FULL_URL);

      if (response.data.status === "OK") {
        const meters = response.data.rows[0].elements[0].distance.value;
        const textD = response.data.rows[0].elements[0].distance.text;
        const seconds = response.data.rows[0].elements[0].duration.value;
        const textT = response.data.rows[0].elements[0].duration.text;
        return {
          statusCode: 200,
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            distance: {
              meters,
              text: textD,
            },
            duration: {
              seconds,
              text: textT,
            },
          }),
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
