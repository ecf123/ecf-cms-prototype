import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { customRender } from "../../utils/testUtils";
import { BrowserRouter } from "react-router-dom";


it("should render the form", () => {
  const { container } = customRender(<Login />);
  expect(container).toMatchSnapshot();
});

it("should not render the error message on load", () => {
  render(<Login />, {wrapper: BrowserRouter});
  const errorMessage = screen.queryByText("Sorry something went wrong");

  expect(errorMessage).toBeFalsy();
});

it("shouldn't render the success message on load", () => {
  render(<Login />, {wrapper: BrowserRouter});
  const successMessage = screen.queryByText(
    "Thank you for submitting! We will be in touch"
  );
  expect(successMessage).toBeFalsy();
});

