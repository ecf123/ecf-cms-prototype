import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";

it("should render the form", () => {
  const { container } = customRender(<Login />);
  expect(container).toMatchSnapshot();
});

it("should not render the error message on load", () => {
  customRender(<Login />);
  const errorMessage = screen.queryByText("Sorry something went wrong");

  expect(errorMessage).toBeFalsy();
});

it("shouldn't render the success message on load", () => {
  customRender(<Login />);
  const successMessage = screen.queryByText(
    "Thank you for submitting! We will be in touch"
  );
  expect(successMessage).toBeFalsy();
});

it("should not submit the form when not all credentials are valid and display error message", () => {
  customRender(<Login />);

  const passwordInput = screen.getByLabelText("Password");
  userEvent.type(passwordInput, "fix");

  const button = screen.queryByText("Login");
  userEvent.click(button);

  const errorMessage = screen.getByText("Sorry something went wrong");
  const successMessage = screen.queryByText(
    "Thank you for submitting! We will be in touch"
  );

  expect(errorMessage).toBeTruthy();
  expect(successMessage).toBeFalsy();
});


