import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList.jsx";
import DogDetails from "./DogDetails.jsx";

/** RoutesList renders routes for DogFinder app.
 *
 *  Props: array of objects with dog info like [{name, age, src, facts, id}]
 *
 *  State: none
 *
 *  App -> RoutesList - Routes
 */
function RoutesList({ dogs }) {
  return (
    <Routes>
      <Route
        element={<DogDetails dogs={dogs} />} //TODO: bug if doesn't exit
        path="/dogs/:name"
      />
      <Route
        element={<DogList dogs={dogs} />}
        path="/dogs"
      />
      <Route
        path="*"
        element={<Navigate to="/dogs" />}
      />
    </Routes>
  );
}

export default RoutesList;
