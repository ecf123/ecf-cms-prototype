import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import HomePage from "./HomePage";

it("Should render the home page", () => {
    const { container } = customRender(<HomePage />);
    expect(container).toMatchSnapshot();
  });