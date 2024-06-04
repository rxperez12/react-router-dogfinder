import { useState } from "react";
import { fetchDogsData } from "./utils.js";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

let dogsInfo = "";

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
function DogList({ handleShowDogDetail }) {
  const [dogs, setDogs] = useState("");

  //TODO: move this to APP
  /** Get dogs from API and set them in state */
  async function showDogs() {
    const dogs = await fetchDogsData();
    dogsInfo = dogs;
    setDogs(dogs);
  }

  if (dogs === "") {
    showDogs();
    return <div>Loading Doggos...</div>;
  }

  return (
    <div className="DogsList">
      {dogs.map((dog) => (
        <div key={uuid()}>
          <h3>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </h3>
          <img src={`./${dog.src}.jpg`} />
        </div>
      ))}
    </div>
  );
}

export default DogList;
