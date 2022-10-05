// FreeType.test.jsx
import { render, screen } from "@testing-library/react";
import FreeType from "./FreeType.jsx";
import { customRender } from "../../utils/testUtils";

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <FreeType
      freeTypelabelText={"label"}
      freeTypeplaceHolderText={"placeholder"}
    />
  );

  expect(container).toMatchSnapshot();
});

it("Should render the FreeType textarea", () => {
  // 1. Arrange
  render(<FreeType />);
  // 2. Act
  const textArea = screen.getByRole("textbox");
  // 3. Assert
  expect(textArea).toBeInTheDocument();
  //comment
});

it("Should render the FreeType label", () => {
  render(<FreeType freeTypeLabelText="Label Text!"/>);
  const label = screen.getByText("Label Text!");
  expect(label).toBeInTheDocument();
});
