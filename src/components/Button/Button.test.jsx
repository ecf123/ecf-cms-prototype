import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Button from "./Button";

it("Should render the Button", () => {
  const { container } = customRender(<Button />);
  expect(container).toMatchSnapshot();
});

it("Should render the image in the Button", () => {
  render(<Button />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

it("Should display the text in the button", () => {
  render(<Button buttonText="Cancel" />);
  const text = screen.getByText("Cancel");
  expect(text).toBeInTheDocument();
});
