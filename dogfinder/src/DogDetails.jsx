import { v4 as uuid } from "uuid";

/** AppComponent for summary
 *
 * Props:
 * - Object of information for a dog like {name, age, src, facts, id}
 *
 * State: none
 *
 * App -> DogList -> DogDetails
 */

function DogDetails({ dog }) {
  return (
    <div className="DogDetails">
      <h2>{dog.name}</h2>
      <img src={`../public/${dog.src}.jpg`} />
      <p>Age: {dog.age}</p>
      <ul>Facts about {dog.name}:
        {dog.facts.map(
          fact => <li key={uuid()}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default DogDetails;
