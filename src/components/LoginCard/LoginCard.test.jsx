import {render, screen} from "@testing-library/react";
import LoginCard from "./LoginCard";
import userEvent from "@testing-library/user-event";

it("should render the form", () => {
    render (<LoginCard />)
    const loginCard = screen.getAllByRole("textbox");
    loginCard.forEach(input => {
        expect(input).toBeInTheDocument();
    })
})

it("should render the error message on load", () => {
    render (<LoginCard />)
    const errorMessage = screen.queryByText("Please input valid email address.")
    const errorMessage1 = screen.queryByText('Email address should not contain & * , / ')
    const errorMessage2 = screen.queryByText('The password length should be longer than 8.')

    expect (errorMessage).toBeFalsy();
    expect (errorMessage1).toBeFalsy();
    expect (errorMessage2).toBeFalsy();
})

it("should render the success message on load" , () => {
    render (<LoginCard />)
    const successMessage = screen.queryByText('Wlecome!');
    expect (successMessage).toBeFalsy();
})

it("should submit the form when all credentials are valid and display success message", () => {
    render (<LoginCard />)

    const emailInput = screen.getByText("Email Address");
    userEvent.type(emailInput,"ChenLiangamelia@163.com");

    const passwordInput = screen.getByText("Password");
    userEvent.type(passwordInput, "nology2022");

    const button = screen.getByText("Login");
    userEvent.click(button);

    const errorMessage = screen.getByText("Please input valid email address.")
    const errorMessage1 = screen.getByText('Email address should not contain & * , / ')
    const errorMessage2 = screen.getByText('The password length should be longer than 8.')
    const successMessage = screen.queryByText('Wlecome!');

    expect (errorMessage).toBeFalsy();
    expect (errorMessage1).toBeFalsy();
    expect (errorMessage2).toBeFalsy();
    expect (successMessage).toBeTruthy();

})