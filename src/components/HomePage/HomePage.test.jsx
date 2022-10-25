import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import HomePage from "./HomePage";

it("Should render the home page", () => {
  const { container } = customRender(<HomePage />);
  expect(container).toMatchSnapshot();
});

it("Should render two buttons", () => {
  render(<HomePage />);

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2);
});
