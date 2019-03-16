import React from "react";
import { render, cleanup } from "react-testing-library";
import TeamFeed from "./teamfeed";

afterEach(cleanup);

it("renders correct prop changes", () => {
  const { getByText, rerender } = render(
    <TeamFeed contentTitle="All" teams={[]} />
  );
  getByText("All Teams");
  rerender(<TeamFeed contentTitle="Favorite" teams={[]} />);
  getByText("Favorite Teams");
  rerender(<TeamFeed contentTitle="Archived" teams={[]} />);
  getByText("Archived Teams");
});
