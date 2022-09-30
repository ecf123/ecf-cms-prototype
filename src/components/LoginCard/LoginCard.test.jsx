import {render, screen} from "@testing-library/react";
import LoginCard from "./LoginCard";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";

it("should render the form", () => {
    const { container } = customRender(
        <LoginCard>
    
          <div>
            <label>Email Address</label>
            <input/>
          </div>

          <div>
            <label>Password</label>
            <input ></input>
          </div>

            <button>Login</button>

        </LoginCard>
    )
        expect(container).toMatchSnapshot();
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
    const successMessage = screen.queryByText('Welcome!');
    expect (successMessage).toBeFalsy();
});

it("should submit the form when all credentials are valid and display success message", () => {
    render (<LoginCard />)

    const emailInput = screen.getByText("Email Address");
    userEvent.type(emailInput,"ChenLiangamelia@163.com");

    const passwordInput = screen.getByText("Password");
    userEvent.type(passwordInput, "nology2022");

    const button = screen.getByText("Login");
    userEvent.click(button);

    const errorMessage = screen.queryByText(/Please input valid email address./i)
    const errorMessage1 = screen.queryByText('Email address should not contain & * , / ')
    const errorMessage2 = screen.queryByText('The password length should be longer than 8.')
    const successMessage = screen.queryByText(/Welcome!/i);

    expect (errorMessage).toBeFalsy();
    expect (errorMessage1).toBeFalsy();
    expect (errorMessage2).toBeFalsy();
    expect (successMessage).toBeTruthy(); ///this should not be passing 

});