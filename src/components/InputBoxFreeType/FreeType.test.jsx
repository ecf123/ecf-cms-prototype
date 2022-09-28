// FreeType.test.jsx
import { render, screen } from "@testing-library/react";
import FreeType from "./FreeType.jsx";

it("Should render the FreeType textarea", () => {
    // 1. Arrange
    render(<FreeType/>);
    // 2. Act
    const textArea = screen.getByTestId("textarea");
    // 3. Assert
    expect(textArea).toBeInTheDocument();
    //comment
  });

it("Should render the FreeType label", () => {
  render(<FreeType />);
  const label = screen.getByTestId("label");
  expect(label).toBeInTheDocument();
});

it("Should render the FreeType div", () => {
  render(<FreeType />);
  const div = screen.getByTestId("div");
  expect(div).toBeInTheDocument();
});
