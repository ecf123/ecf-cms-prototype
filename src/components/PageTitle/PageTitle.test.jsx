import { render, screen} from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import PageTitle from "./PageTitle";

it("should have a title displayed", () => {
    render(<PageTitle title="test title"/>);
    const title = screen.getByText("test title");
    expect(title).toBeInTheDocument();
})

it("Should render layout with children", () => {
  const { container } = customRender(
    <PageTitle title="test title"/>
  );
  expect(container).toMatchSnapshot();
});