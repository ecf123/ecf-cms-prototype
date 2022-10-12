import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDown from "./DropDown";
const lessonArr = [{title: "The role of banking in the financial system"}, {title: "Currency Risk Management"}];
it("Should render DropDown component", () => {
  const { container } = customRender(<DropDown title={"Business"} lessonArr={lessonArr} />);

  expect(container).toMatchSnapshot();
});

it("Should check if the checkbox has been checked", () => {
  render(<DropDown title={"Business"} lessonArr={lessonArr} />);

  userEvent.click(screen.getByRole("checkbox"));

  expect(screen.getByRole("checkbox")).toBeChecked();
});

it("Should display lesson list if checkbox is checked", () => {
  render(<DropDown title={"Business"} lessonArr={lessonArr}  />);

  const list = screen.getByText("The role of banking in the financial system");

  expect(list).toHaveStyle({ height: " 0" });

  fireEvent.click(screen.getByRole("checkbox"));

  const listAfter = screen.getByText("The role of banking in the financial system");

  expect(listAfter).toHaveStyle({ height: " auto" });
});
