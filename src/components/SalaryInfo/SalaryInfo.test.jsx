import { render, screen } from "@testing-library/react";
import SalaryInfo from "./SalaryInfo";
import { customRender } from "../../utils/testUtils";

it("Should match the snapshot, with the props", () => {
  const obj = {
    Advisor: 25000,
    Analyst: 5000,
    Audit: 30000,
    Consultant: 100000,
  };
  const { container } = customRender(
    <SalaryInfo salariesObj={obj} />
  );
  expect(container).toMatchSnapshot();
});

it("Should render in the SalaryInfo heading", () => {
  const obj = {
    Advisor: 25000,
    Analyst: 5000,
    Audit: 30000,
    Consultant: 100000,
  };
  render(<SalaryInfo salariesObj={obj} />);
  const heading = screen.getByText("Average Salaries");
  expect(heading).toBeInTheDocument();
});

it("Should render the SalaryInfo titles and pay", () => {
  const obj = {
    Advisor: 25000,
    Analyst: 5000,
    Audit: 30000,
    Consultant: 100000,
  };
  render(<SalaryInfo salariesObj={obj} />);
  const title = screen.getByRole("heading", { name: /Consultant/i });
  const pay = screen.getByRole("heading", { name: /£25,000/i });
  expect(title).toBeInTheDocument();
  expect(pay).toBeInTheDocument();
});
