import { describe, expect, test } from "vitest";

import { render } from "@testing-library/react";
import DogDetails from "./DogDetails.jsx";

const TEST_DOG = {
  "name": "Duke",
  "age": 3,
  "src": "duke",
  "facts": [
    "Duke believes that ball is life.",
    "Duke likes snow.",
    "Duke enjoys pawing other dogs."
  ],
  "id": "1641"
};

describe("DogDetails Tests", function () {

  test("renders without crashing", function () {
    render(<DogDetails dog={TEST_DOG} />);
  });
});