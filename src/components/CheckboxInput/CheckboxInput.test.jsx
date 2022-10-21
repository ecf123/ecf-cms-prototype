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

it("Should render the checkbox as not checked by default, then check the checkbox if it is clicked", () => {
  render(<CheckboxInput />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
