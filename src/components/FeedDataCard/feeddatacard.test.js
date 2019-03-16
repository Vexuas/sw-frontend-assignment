import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { FeedDataCard } from "./feeddatacard";

afterEach(cleanup);

it("gets props data from api call", async () => {
  const { getByText } = render(
    <FeedDataCard
      activity={{
        person: { name: "Julie" },
        action: "increased_quota",
        target: "Indeed - US",
        created_at: "2 hours ago"
      }}
      key={0}
    />
  );
  await waitForElement(() => getByText("Julie"));
  await waitForElement(() => getByText("Indeed - US"));
  await waitForElement(() => getByText("2 hours ago"));
});
