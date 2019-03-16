import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import TeamCardBot from "./teamcardbot";

afterEach(cleanup);

it("gets props data from api call", async () => {
  const { getByText } = render(
    <TeamCardBot teaminfoCamp={20} teaminfoLeads={1500} />
  );
  await waitForElement(() => getByText("20 Campaigns"));
  await waitForElement(() => getByText("1500 Leads"));
});
