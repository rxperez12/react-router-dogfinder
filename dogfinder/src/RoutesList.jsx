import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList.jsx";
import DogDetails from "./DogDetails.jsx";

function RoutesList() {

  //TODO: do we use callback here
  // showSpecificDog(dog){

  // }

  return (
    <Routes>
      <Route
        element={<DogList />}
        path="/dogs"
      />
      <Route
        element={<DogDetails dog={}/>}
        path="/dogs/:name"
      />
      <Route
        path="*"
        element={<Navigate to="/dogs" />}
      />
    </Routes>
  );
}

export default RoutesList;
