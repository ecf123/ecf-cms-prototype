import { customRender } from "../../utils/testUtils";
import {render, screen} from "@testing-library/react";
import Overview from "./Overview"


it("renders the Overview", () => {
  const { container } = customRender(<Overview />);
  expect(container).toMatchSnapshot();
});

it("should render the header on the screen", () => {
  render(<Overview header="Overview"/>)
  const header = screen.getByText("Overview");

  expect(header).toBeInTheDocument();
})

it("should render the text on the screen", () => {
  render(<Overview text="text"/>)
  const text = screen.getByText("text");

  expect(text).toBeInTheDocument();
})

