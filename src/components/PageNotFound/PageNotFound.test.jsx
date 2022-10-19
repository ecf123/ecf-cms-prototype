import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";

it("Should render the Page Not Found ", () => {
  const { container } = customRender(<PageNotFound />);

  expect(container).toMatchSnapshot();
});

it("Should render an image", () => {
  render(<PageNotFound />, { wrapper: BrowserRouter });

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

it("Should render a button", () => {
  render(<PageNotFound />, { wrapper: BrowserRouter });

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
