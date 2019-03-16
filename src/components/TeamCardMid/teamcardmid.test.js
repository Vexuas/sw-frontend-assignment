import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import TeamCardMid from "./teamcardmid";

afterEach(cleanup);

it("gets props data from api call", async () => {
  const { getByText } = render(<TeamCardMid teaminfoDesc="Some text here" />);
  await waitForElement(() => getByText("Some text here"));
});
