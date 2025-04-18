// Determine the pricing tier based on how far the target date is from today
function getPriceTierByDate(dateStr) {
  const target = new Date(dateStr);
  const now = new Date();
  const diffMs = target.getTime() - now.getTime(); // milliseconds between now and the target date
  const diffDays = diffMs / (1000 * 60 * 60 * 24); // convert to days
  const diffWeeks = diffDays / 7; // convert to weeks

  if (diffWeeks >= 4) {
    return "EB"; // Early Bird (4 weeks or more)
  } else if (diffWeeks >= 2) {
    return "ROT"; // Right On Time (2–4 weeks)
  } else {
    return "LM"; // Last Minute (<2 weeks)
  }
}

// Convert a distance in meters to miles, rounded to 2 decimal places
function getMilesFromMeters(meters) {
  const MILES_PER_METER = 0.000621371;
  const miles = meters * MILES_PER_METER;
  return Number(miles.toFixed(2));
}

// Calculate the price based on miles and timing tier
function getPriceByMiles(timing, miles) {
  let priceByMiles = 0;
  switch (timing) {
    case "EB":
      priceByMiles = miles * 1.7;
      break;
    case "ROT":
      priceByMiles = miles * 1.8;
      break;
    case "LM":
      priceByMiles = miles * 1.9;
      break;
    default:
      priceByMiles = miles * 1.7;
  }
  return priceByMiles;
}

// Calculate truck cost based on timing tier
function getPriceByTruckCost(timing) {
  let priceByTruckCost = 0;
  switch (timing) {
    case "EB":
      priceByTruckCost = 45;
      break;
    case "ROT":
      priceByTruckCost = 50;
      break;
    case "LM":
      priceByTruckCost = 65;
      break;
    default:
      priceByTruckCost = 45;
  }
  return priceByTruckCost;
}

// Calculate labor/mover cost based on timing and number of movers
function getPriceByMovers(timing, numOfMovers) {
  if (timing === "EB" && numOfMovers <= 2) return 220;
  if (timing === "EB" && numOfMovers > 2) return 880;
  if (timing === "ROT" && numOfMovers <= 2) return 250;
  if (timing === "ROT" && numOfMovers > 2) return 1000;
  if (timing === "LM" && numOfMovers <= 2) return 300;
  if (timing === "LM" && numOfMovers > 2) return 1200;
  return 220; // default fallback
}

// Main function to compute all price components based on input
export const calculateTotalCosts = (
  dateStr,
  totalNumOfTrucks,
  totalNumOfMovers,
  meters
) => {
  const timingTier = getPriceTierByDate(dateStr);
  const milesFromMeters = getMilesFromMeters(meters);
  const milesPrice = getPriceByMiles(timingTier, milesFromMeters);
  const moversPrice = getPriceByMovers(timingTier, totalNumOfMovers);
  const truckCosts = getPriceByTruckCost(timingTier) * totalNumOfTrucks;
  const sum = milesPrice + moversPrice + truckCosts;
  //   Early Bird Min Max
  if (sum < 282 && timingTier === "EB") return 282;
  if (sum > 942 && timingTier === "EB") return 942;
  //   Right On Time Min Max
  if (sum < 318 && timingTier === "ROT") return 318;
  if (sum > 1068 && timingTier === "ROT") return 1068;
  //   Last Minute Min Max
  if (sum < 384 && timingTier === "LM") return 384;
  if (sum > 1284 && timingTier === "LM") return 1284;

  //   calculated costs sum
  return sum;
};

//  TODO: Needs refined logic on what qualifies for 2 workers vs 4 workers
export const getNumOfMovers = (totalNumOfTrucks) => {
  if (totalNumOfTrucks > 2) return 4;
  else return 2;
};
