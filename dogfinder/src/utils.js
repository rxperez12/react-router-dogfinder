/** Utility function for Dogs */

const DOGS_API_URL = "http://localhost:5001/dogs";

async function fetchDogData() {
  const response = await fetch(DOGS_API_URL);
  const dogsData = await response.json();

  return dogsData;
};

export { fetchDogData };