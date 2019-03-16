import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "react-testing-library";
import HeaderSecondSegment from "./headersecondsegment";

afterEach(cleanup);

it("clicks on text", () => {
  const { getByText } = render(<HeaderSecondSegment />);
  fireEvent.click(getByText("All"));
  fireEvent.click(getByText("Favorites"));
  fireEvent.click(getByText("Archived"));
});
