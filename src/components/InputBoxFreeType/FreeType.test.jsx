// FreeType.test.jsx
import { render, screen, getAllByRole } from "@testing-library/react";
import FreeType from "./FreeType.jsx";

it("Should render the FreeType textarea", () => {
    // 1. Arrange
    render(<FreeType/>);
    // 2. Act
    const textArea = screen.getAllByRole("textbox");
    // 3. Assert
    expect(textArea).toBeInTheDocument();
  });
