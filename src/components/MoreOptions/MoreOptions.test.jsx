import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";
import MoreOptions from "./MoreOptions";

it("Should render MoreOption component", () => {
  const { container } = customRender(<MoreOptions title={"More"} />);

  expect(container).toMatchSnapshot();
});

it("should have 2 buttons", () => {
  render(<MoreOptions title={"More"} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2);
});
