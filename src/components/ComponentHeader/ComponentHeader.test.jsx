import { render, screen} from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import ComponentHeader from "./ComponentHeader";

it("should have a title displayed", () => {
    render(<ComponentHeader title="test title"/>);
    const title = screen.getByText("test title");
    expect(title).toBeInTheDocument();
})

it("Should render layout with children", () => {
  const { container } = customRender(
    <ComponentHeader title="test title"/>
  );
  expect(container).toMatchSnapshot();
});