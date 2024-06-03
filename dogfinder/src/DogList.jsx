import { useState } from "react";
import { fetchDogsData } from "./utils.js";
import { v4 as uuid } from "uuid";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * App -> DogList
 */
function DogList() {
  const [dogs, setDogs] = useState("");
  //TODO: add loading state

  /** Get dogs from API and set them in state */
  async function showDogs() {
    const dogs = await fetchDogsData();
    setDogs(dogs);
  }

  // TODO: if (dogs === "") {
  //   // show loading message
  // }

  // List of doggos
  return (<div className="DogsList">
    {!dogs && showDogs()}
    {dogs &&
      dogs.map(dog => (
        <div key={uuid()}>
          <h3><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h3>
          <img src={`../public/${dog.src}`} />
        </div>))
    }
  </div>);
  // If clicking on doggo, take to dog detail for that dog -> put dog in url param
}

export default DogList;