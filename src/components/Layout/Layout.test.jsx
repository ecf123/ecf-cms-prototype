import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

it("Should render layout with children", () => {
  const { container } = customRender(
    <Layout>
      <p>some content</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});

it("should render the correct page title when clicking", () => {
  customRender( <Layout /> )

  const dashBoard = screen.queryAllByText("Dashboard")[0]
  userEvent.click(dashBoard)

  const pageTitle = screen.getByRole("heading", {level: 1})

  expect(pageTitle.innerHTML).toBe("Dashboard");

})


it("when clicking the marketplace, the title should be the same with the choice", () => {
  customRender( <Layout /> )

  const marketPlace = screen.queryAllByText("Marketplace")[0]
  userEvent.click(marketPlace)

  const pageTitle = screen.getByRole("heading", {level: 1})

  expect(pageTitle.innerHTML).toBe("Marketplace");

})
