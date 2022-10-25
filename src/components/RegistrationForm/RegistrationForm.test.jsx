import { customRender } from "../../utils/testUtils";
import RegistrationForm from "./RegistrationForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("it should match the snapshot", () => {
  const { container } = customRender(<RegistrationForm />);
  expect(container).toMatchSnapshot();
});

it("Should render labels", () => {
  render(<RegistrationForm />);

  const labelOne = screen.getByText("First Name");
  const labelTwo = screen.getByText("Last Name");

  expect(labelOne).toBeInTheDocument();
  expect(labelTwo).toBeInTheDocument();
});

it("should not display text when password entered", () => {
  render(<RegistrationForm />);

  const passwordInput = screen.getByLabelText("Password");
  userEvent.type(passwordInput, "fix");

  const password = screen.queryByText("fix");
  expect(password).toBeFalsy();
});
