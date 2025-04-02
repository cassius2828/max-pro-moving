import axios from "axios";
const MATRIX_BASE_URL = "https://maps.googleapis.com/maps/api/distancematrix";
// eslint-disable-next-line no-undef
const GOOGLE_PLACES_API_KEY = import.meta.env.GOOGLE_PLACES_API_KEY;

export const getMatrixDetails = async (req, res) => {
  const { startingLocation, stop1, stop2, stop3, endLocation } = req.body;

  // ensures user must enter locations
  if (!startingLocation || (!stop1 && !endLocation)) {
    return res
      .status(400)
      .send("Inadequate location params passed to function");
  }

  // initialize full url
  let FULL_URL;

  ///////////////////////////
  // MULTI-STOP-TRIP
  ///////////////////////////
  // * 3 stops
  if (stop2 && stop3) {
    FULL_URL = `${MATRIX_BASE_URL}/json?origins=place_id:${startingLocation}&destinations=place_id:${stop1}|place_id:${stop2}&units=imperial&key=${GOOGLE_PLACES_API_KEY}`;
    if (!FULL_URL) {
      return res
        .status(400)
        .send("URL was unable to be completed, likely due to lack of params");
    }

    try {
      // First request: from startingLocation to stop1
      const response1 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${startingLocation}`,
          destinations: `place_id:${stop1}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      // Second request: from stop1 to stop2
      const response2 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop1}`,
          destinations: `place_id:${stop2}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      // Second request: from stop2 to stop3
      const response3 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop2}`,
          destinations: `place_id:${stop3}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });
      if (response1.data.status === "OK" && response2.data.status === "OK") {
        // calculate trip 1 | A to B
        const distanceValueMeters1 =
          response1.data.rows[0].elements[0].distance.value;
        const durationValueSeconds1 =
          response1.data.rows[0].elements[0].duration.value;
        // calculate trip 2 | B to C
        const distanceValueMeters2 =
          response2.data.rows[0].elements[0].distance.value;
        const durationValueSeconds2 =
          response2.data.rows[0].elements[0].duration.value;
        // calculate trip 3 | C to D
        const distanceValueMeters3 =
          response3.data.rows[0].elements[0].distance.value;
        const durationValueSeconds3 =
          response3.data.rows[0].elements[0].duration.value;
        // calculate the total trip | (A+B) + (B+C)
        const totalDistanceMeters =
          distanceValueMeters1 + distanceValueMeters2 + distanceValueMeters3;
        const totalDurationSeconds =
          durationValueSeconds1 + durationValueSeconds2 + durationValueSeconds3;

        // respond with object
        return res.status(200).json({
          distanceValueMeters: totalDistanceMeters,
          durationValueSeconds: totalDurationSeconds,
        });
      } else {
        return res
          .status(500)
          .send(
            `Error: ${
              response1.data.error_message || response2.data.error_message
            }`
          );
      }
    } catch (error) {
      return res.status(500).send(`Request failed: ${error}`);
    }
    // * 2 stops
  } else if (stop2) {
    FULL_URL = `${MATRIX_BASE_URL}/json?origins=place_id:${startingLocation}&destinations=place_id:${stop1}|place_id:${stop2}&units=imperial&key=${GOOGLE_PLACES_API_KEY}`;
    if (!FULL_URL) {
      return res
        .status(400)
        .send("URL was unable to be completed, likely due to lack of params");
    }

    try {
      // First request: from startingLocation to stop1
      const response1 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${startingLocation}`,
          destinations: `place_id:${stop1}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      // Second request: from stop1 to stop2
      const response2 = await axios.get(`${MATRIX_BASE_URL}/json`, {
        params: {
          origins: `place_id:${stop1}`,
          destinations: `place_id:${stop2}`,
          units: "imperial",
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      if (response1.data.status === "OK" && response2.data.status === "OK") {
        // calculate trip 1 | A to B
        const distanceValueMeters1 =
          response1.data.rows[0].elements[0].distance.value;
        const durationValueSeconds1 =
          response1.data.rows[0].elements[0].duration.value;
        // calculate trip 2 | B to C
        const distanceValueMeters2 =
          response2.data.rows[0].elements[0].distance.value;
        const durationValueSeconds2 =
          response2.data.rows[0].elements[0].duration.value;
        // calculate the total trip | (A+B) + (B+C)
        const totalDistanceMeters = distanceValueMeters1 + distanceValueMeters2;
        const totalDurationSeconds =
          durationValueSeconds1 + durationValueSeconds2;

        // respond with object
        return res.status(200).json({
          distanceValueMeters: totalDistanceMeters,
          durationValueSeconds: totalDurationSeconds,
        });
      } else {
        return res
          .status(500)
          .send(
            `Error: ${
              response1.data.error_message || response2.data.error_message
            }`
          );
      }
    } catch (error) {
      return res.status(500).send(`Request failed: ${error}`);
    }
  }
  ///////////////////////////
  // SINGLE-STOP-TRIP
  ///////////////////////////
  else {
    FULL_URL = `${MATRIX_BASE_URL}/json?origins=place_id:${startingLocation}&destinations=place_id:${endLocation}&units=imperial&key=${GOOGLE_PLACES_API_KEY}`;

    if (!FULL_URL) {
      return res
        .status(400)
        .send("URL was unable to be completed, likely due to lack of params");
    }

    try {
      const response = await axios.get(FULL_URL);
      if (response.data.status === "OK") {
        // caclulate trip
        const distanceValueMeters =
          response.data.rows[0].elements[0].distance.value;
        const durationValueSeconds =
          response.data.rows[0].elements[0].duration.value;
        // respond with obj
        return res
          .status(200)
          .json({ distanceValueMeters, durationValueSeconds });
      } else {
        return res.status(500).send(`Error: ${response.data.error_message}`);
      }
    } catch (error) {
      return res.status(500).send(`Request failed: ${error}`);
    }
  }
};
