import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * call list
 */
function Nav({ dogNames }) {
  return (
    <div className=" navbar-nav mr-auto">
      {" "}
      DogsFinder
      {dogNames.map((dogName) => (
        <div key={uuid()}>
          <Link to={`/dogs/${dogName}`}> {dogName}</Link>
        </div>
      ))}
    </div>
  );
}

export default Nav;
