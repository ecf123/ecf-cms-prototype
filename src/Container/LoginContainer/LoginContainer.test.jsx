import {render, screen, waitFor} from "@testing-library/react";
import LoginContainer from "./LoginContainer";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";



it("should render the form", () => {
    const { container } = customRender(
        <LoginContainer>
    
          <div>
            <label>Email Address</label>
            <input/>
          </div>

          <div>
            <label>Password</label>
            <input ></input>
          </div>

            <button>Login</button>

        </LoginContainer>
    )
        expect(container).toMatchSnapshot();
    })

it("should not render the error message on load", () => {
    render (<LoginContainer />)
    const errorMessage = screen.queryByText("Sorry something went wrong")
    
    expect (errorMessage).toBeFalsy();
})

it("shouldn't render the success message on load" , () => {
    render (<LoginContainer />)
    const successMessage = screen.queryByText('Thank you for submitting! We will be in touch');
    expect (successMessage).toBeFalsy();
});

it("should submit the form when all credentials are valid and display success message", () => {
    render (<LoginContainer />)

    const emailInput = screen.getByText("Email Address");
    userEvent.type(emailInput,"ChenLiangamelia@163.com");

    const passwordInput = screen.getByText("Password");
    userEvent.type(passwordInput, "nology2022");

    const button = screen.getByText("Login");
    userEvent.click(button);

    const errorMessage = screen.queryByText(/Sorry something went wrong/i)
    const successMessage = screen.queryByText(/Thank you for submitting! We will be in touch/i);
    

    expect (errorMessage).toBeFalsy();
    expect (successMessage).toBeTruthy(); ///this should not be passing 

});