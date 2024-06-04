import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

/** AppComponent for summary
 *
 * Props:
 * - Object of information for a dog like {name, age, src, facts, id}
 *
 * State: none
 *
 * App -> Router -> DogDetails
 */

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = (dogs.filter(dog => dog.name === name))[0];

  return (
    <div className="DogDetails">
      <h2>{dog.name}</h2>
      <img src={`./${dog.src}.jpg`} />
      <p>Age: {dog.age}</p>
      <ul>
        Facts about {dog.name}:
        {dog.facts.map((fact) => (
          <li key={uuid()}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
