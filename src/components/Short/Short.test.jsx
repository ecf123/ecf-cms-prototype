// Short.test.jsx
import { render, screen } from "@testing-library/react";
import Short from "./Short.jsx";

it("Should render the Short textarea", () => {
  // 1. Arrange
  render(<Short />);
  // 2. Act
  const textBox = screen.getByTestId("textbox");
  // 3. Assert
  expect(textBox).toBeInTheDocument();
  //comment
});

it("Should render the Short label", () => {
  render(<Short />);
  const label = screen.getByTestId("label");
  expect(label).toBeInTheDocument();
});

it("Should render the Short div", () => {
  render(<Short />);
  const div = screen.getByTestId("div");
  expect(div).toBeInTheDocument();
});
