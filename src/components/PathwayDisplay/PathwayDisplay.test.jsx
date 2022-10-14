import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";

import PathwayDisplay from "./PathwayDisplay.jsx";

it("should render the grid icon", () => {
    render(<PathwayDisplay />);
    const image = screen.getByAltText("grid display option button");
    expect(image).toBeInTheDocument();
  });

  it("should render the list icon", () => {
    render(<PathwayDisplay />);
    const image = screen.getByAltText("list view option button");
    expect(image).toBeInTheDocument();
  });