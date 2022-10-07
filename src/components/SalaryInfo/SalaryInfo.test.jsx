import { render, screen } from "@testing-library/react";
import SalaryInfo from "./SalaryInfo";
import { customRender } from "../../utils/testUtils";

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <SalaryInfo
      avgSalaryNumber={"£99,999"}
      jobsArr={
        "Advisor: '£25,000', Analyst: '£5,000', Audit: '£30,000', Consultant: '£100,000'"
      }
    />
  );
  expect(container).toMatchSnapshot();
});

it("Should render in the SalaryInfo heading", () => {
  render(
    <SalaryInfo
      avgSalaryNumber={"£99,999"}
      jobsArr={"Advisor: '£25,000', Analyst: '£5,000'"}
    />
  );
  const heading = screen.getByText("Average Salaries");
  expect(heading).toBeInTheDocument();
});

it("Should render the SalaryInfo titles and pay", () => {
  render(
    <SalaryInfo
      avgSalaryNumber={"£99,999"}
      jobsArr={"Advisor: '£25,000', Analyst: '£5,000'"}
    />
  );
  const title = screen.getByRole("heading", { name: /Consultant/i });
  const pay = screen.getByRole("heading", { name: /£25,000/i });
  expect(title).toBeInTheDocument();
  expect(pay).toBeInTheDocument();
});
