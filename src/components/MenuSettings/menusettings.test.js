import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import MenuSettings from "./menusettings";

afterEach(cleanup);

it("gets props data from api call", async () => {
  const { getByText } = render(
    <MenuSettings
      userFeed={{ id: 4, name: "John", avatar: "", notifications_count: 5 }}
    />
  );
  await waitForElement(() => getByText("Hello, John"));
  await waitForElement(() => getByText("5"));
});
