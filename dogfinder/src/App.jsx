import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav.jsx";
import RoutesList from "./RoutesList.jsx";
import "./App.css";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * App -> { Nav, Routes}
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
