/** Utility function for Dogs */

const DOGS_API_URL = "http://localhost:5001/dogs";

/** Get dog API data and return it to user */
async function fetchDogsData() {
  const response = await fetch(DOGS_API_URL);
  const dogsData = await response.json();

  return dogsData;
};

export { fetchDogsData };