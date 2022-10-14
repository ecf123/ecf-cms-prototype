import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import { BrowserRouter } from "react-router-dom";
import PathwayDisplay from "./PathwayDisplay.jsx";

it("should render the grid icon", () => {
    render(<PathwayDisplay />, {wrapper: BrowserRouter});
    const image = screen.getByAltText("grid display option button");
    expect(image).toBeInTheDocument();
  });

  it("should render the list icon", () => {
    render(<PathwayDisplay />, {wrapper: BrowserRouter});
    const image = screen.getByAltText("list view option button");
    expect(image).toBeInTheDocument();
  });

  it("Should render the add course button", () => {
    render(<PathwayDisplay />, {wrapper: BrowserRouter});
    const button = screen.getByText("Add Course");
    expect(button).toBeInTheDocument();
  })

  it("Should render Pathway Display", () => {
    const {container} = customRender(
      <PathwayDisplay/>, {wrapper: BrowserRouter}
    )
    expect(container).toMatchSnapshot();

  })


