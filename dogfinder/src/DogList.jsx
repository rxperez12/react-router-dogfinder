import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

/** DogList displays name and image for all dogs.
 *
 * Props: array of info for dogs like [{name, age src, facts, id}]
 *
 * State: none
 *
 * App -> Routes -> DogList
 */
function DogList({ dogs }) {
  return (
    <div className="DogsList">
      {dogs.map((dog) => (
        <div
          key={uuid()}
          className="container"
        >
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
