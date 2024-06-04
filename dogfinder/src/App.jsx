import { BrowserRouter } from "react-router-dom";
import { fetchDogsData } from "./utils.js";
import { useState } from "react";
import Nav from "./Nav.jsx";
import RoutesList from "./RoutesList.jsx";
import "./App.css";

/** Main application: depending on path, show different components.
 *
 * Props: none
 *
 * State: ?
 *
 * App -> { Nav, Routes}
 */
function App() {
  const [dogs, setDogs] = useState('');

  /** Get dogs from API and set them in state */
  async function getDogs() {
    const dogs = await fetchDogsData();
    const dogsInfo = dogs;
    setDogs(dogs);
  }

  if (dogs === "") {
    getDogs();
    return <div></div>;
  }

  const dogNames = dogs.map(dog => dog.name);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogNames} />
        <RoutesList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
