import { render, screen } from "@testing-library/react";
import SelectComponent from "./SelectComponent";
import { customRender } from "../../utils/testUtils";

it("Should match the snapshot", () => {
    const { container } = customRender(
      <SelectComponent />
    );
    expect(container).toMatchSnapshot();
  });

it("Should render in the SelectComponent select box", () => {
    render(<SelectComponent />)
    const input = screen.getByText("Lesson");
    expect(input).toBeInTheDocument();
});

it("Should render the SelectComponent label", () => {
    render(<SelectComponent />);
    const label = screen.getByText("Lesson Type");
    expect(label).toBeInTheDocument();
});
  