import { fireEvent, getByText } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import NavBar from "./NavBar";

it("renders the NavBar", () => {
  const { container } = customRender(<NavBar />);
  expect(container).toMatchSnapshot();
});

it("shows Dashboard as selected on load", () => {
  const { container } = customRender(<NavBar />);

  const dashboardItem = getByText(container, "Dashboard").parentElement;

  expect(dashboardItem).toHaveStyle(
    "border-left: 3px solid $color-green-light;"
  );
});

it("shows Pathways as selected on when clicked", () => {
  const { container } = customRender(<NavBar />);

  const pathwaysItem = getByText(container, "Pathways");

  expect(pathwaysItem).toHaveStyle("color: $color-grey-dark;");

  fireEvent.click(pathwaysItem);

  expect(pathwaysItem).toHaveStyle("color: $color-blue-navy-dark;");
});
