// Short.test.jsx
import { render, screen } from "@testing-library/react";
import Short from "./Short.jsx";
import {customRender} from "../../utils/testUtils";

it("Should match the snapshot, without the props", () => {
  const {container} = customRender(<Short/>);
  expect(container).toMatchSnapshot();
});

it("Should match the snapshot, with the props", () => {
  const {container} = customRender(<Short shortlabelText={"label"} shortplaceHolderText={"placeholder"}/>);
  expect(container).toMatchSnapshot();
});

it("Should render the Short textarea", () => {
  // 1. Arrange
  render(<Short />);
  // 2. Act
  const input = screen.getByTestId("input");
  // 3. Assert
  expect(input).toBeInTheDocument();
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