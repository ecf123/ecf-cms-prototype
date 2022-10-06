import { render, screen } from "@testing-library/react";
import Careers from "./PotentialCareers.jsx";
import { customRender } from "../../utils/testUtils";

it("it should match the snapshot", () => {
    const { container } = customRender(
      <Careers/>
    );
    expect(container).toMatchSnapshot();
  });

it("Should render in the potential careers heading", () => {
  // 1. Arrange
  render(<Careers />);
  // 2. Act
  const heading = screen.getByText("Potential Careers");
  // 3. Assert
  expect(heading).toBeInTheDocument();
  //comment
});

it("Should render in the potential careers list", () => {

  render(<Careers />);

  const listItems = screen.queryAllByText("Career");
  
  expect(listItems).toBeTruthy();
});
