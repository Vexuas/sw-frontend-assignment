import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "react-testing-library";
import TeamCardTop from "./teamcardtop";

afterEach(cleanup);

it("hovers in on text", () => {
  const { getByAltText } = render(
    <TeamCardTop teaminfo={[]} star={[]} createdDate={[]} />
  );
  const textenter = getByAltText("target logo star");
  fireEvent.mouseEnter(textenter);
});

it("hovers out on text", () => {
  const { getByAltText } = render(
    <TeamCardTop teaminfo={[]} star={[]} createdDate={[]} />
  );
  const textleave = getByAltText("target logo star");
  fireEvent.mouseLeave(textleave);
});

it("gets props data from api call", async () => {
  const { getByText } = render(
    <TeamCardTop
      teaminfo={{ image: "image", name: "John" }}
      createdDate="17 March"
    />
  );
  await waitForElement(() => getByText("John"));
  await waitForElement(() => getByText("17 March"));
});
