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

  const list = screen.getByRole("listitem");

  expect(list).toHaveStyle({ height: " 0px" });

  fireEvent.click(screen.getByRole("checkbox"));

  const listAfter = screen.getByRole("listitem");

  expect(listAfter).toHaveStyle({ height: " auto" });
});
