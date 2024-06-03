import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav.jsx";
import RouteList from "./RouteList.jsx";
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
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
