import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList.jsx";
import DogDetails from "./DogDetails.jsx";

function RouteList() {
  return (
    <Routes>
      <Route
        element={<DogList />}
        path="/dogs"
      />
      <Route
        element={<DogDetails />}
        path="/dogs/:name"
      />
      {/* add home route?? */}
      {/* add 404? */}
    </Routes>
  );
}
