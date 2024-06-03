import { useState } from "react";
import { fetchDogData } from "./utils.js";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * call list
 */
function DogList() {
  const [dogs, setDogs] = useState("");
  //TODO: add loading state

  /** Get dogs from API and set them in state */
  async function showsDogs() {
    const dogs = await fetchDogData();

    setDogs(dogs);
  }

  if (dogs === "") {
    // show loading message
  }

  // List of doggos
  return <div></div>;
  // If clicking on doggo, take to dog detail for that dog -> put dog in url param
}

export default DogList;
