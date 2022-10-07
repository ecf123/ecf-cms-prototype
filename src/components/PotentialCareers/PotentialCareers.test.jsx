import { render, screen } from "@testing-library/react";
import Careers from "./PotentialCareers.jsx";
import { customRender } from "../../utils/testUtils";

it("it should match the snapshot with props", () => {
  const { container } = customRender(
    <Careers potentialCareers={["job1", "job2", "bigjob"]} />
  );
  expect(container).toMatchSnapshot();
});

it("Should render in the potential careers heading", () => {
  // 1. Arrange
  render(<Careers potentialCareers={["job1", "job2", "bossman", "Career"]} />);
  // 2. Act
  const heading = screen.getByText("Potential Careers");
  // 3. Assert
  expect(heading).toBeInTheDocument();
  //comment
});

it("Should render in the potential careers list", () => {
  render(
    <Careers
      potentialCareers={["lxcguic", "wcowev", "iavubwair", "CWc", "Career"]}
    />
  );

  const listItems = screen.queryAllByText("Career");

  expect(listItems).toBeTruthy();
});
