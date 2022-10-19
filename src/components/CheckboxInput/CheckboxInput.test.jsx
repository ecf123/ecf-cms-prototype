import { fireEvent, render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import CheckboxInput from "./CheckboxInput.jsx";

it("Should match the snapshot", () => {
  const { container } = customRender(<CheckboxInput />);

  expect(container).toMatchSnapshot();
});

it("Should render the Checkbox Input textarea", () => {
  // 1. Arrange
  render(<CheckboxInput />);
  // 2. Act
  const textArea = screen.getByRole("textbox");
  // 3. Assert
  expect(textArea).toBeInTheDocument();
  //comment
});

it("Should render the Checkbox has not been clicked on load", () => {
  render(<CheckboxInput />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

it("Should render the Checkbox has been clicked by user", () => {
  render(<CheckboxInput />);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
