import React from "react";
import { render, cleanup } from "react-testing-library";
import SideLogos from "./sidelogos";

afterEach(cleanup);

it("gets props for Logo Array from parent component", () => {
  const { getByTitle, getByText } = render(
    <SideLogos
      sidenavTitle="Teams"
      sideLogos={[
        { id: 1, title: "Campaigns", img_src: "src", img_alt: "alt" }
      ]}
    />
  );
  getByTitle("Campaigns");
});
