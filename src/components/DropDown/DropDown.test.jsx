import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";
import { fireEvent, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDown from "./DropDown";

it("Should render DropDown component", () => {
  const { container } = customRender(<DropDown title={"Business"} lessonTitle="Financial Planning with Barclays" />);

  expect(container).toMatchSnapshot();
});

it("Should check if the checkbox has been checked", () => {
  render(<DropDown title={"Business"} lessonTitle="Financial Planning with Barclays" />);

  userEvent.click(screen.getByRole("checkbox"));

  expect(screen.getByRole("checkbox")).toBeChecked();
});

it("Should display lesson list if checkbox is checked", () => {

  const { container } = customRender(<DropDown title={"Business"} lessonTitle="Financial Planning with Barclays" />);

  let contentDiv = document.getElementsByClassName("drop-down__list");
let style = window.getComputedStyle(contentDiv[0]);
  expect(style.height).toBe("0px");

  fireEvent.click(screen.getByRole("checkbox"));

  contentDiv = document.getElementsByClassName("drop-down__list");
  style = window.getComputedStyle(contentDiv[0]);
  expect(style.height).toBe("auto");

  
});
