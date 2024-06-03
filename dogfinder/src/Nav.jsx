import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/dogs" /> Dogs
      </li>
      {/* dog details goes somewhere */}
    </ul>
  );
}

export default Nav;
