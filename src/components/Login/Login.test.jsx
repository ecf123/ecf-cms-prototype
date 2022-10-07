import {render, screen, waitFor} from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";



it("should render the form", () => {
    const { container } = customRender(
        <Login>
            <div>
            <h1>Welcome Back</h1>
            <p>Feugiat magna viverra pellentesque habitant. Libero id amet nisl, tellus cras eleifend et in. </p>
          </div>
          <div>
            <label>Email Address</label>
            <input/>
          </div>

          <div>
            <label>Password</label>
            <input/>
          </div>

            <button>Login</button>

        </Login>
    )
        expect(container).toMatchSnapshot();
    })

it("should not render the error message on load", () => {
    render (<Login />)
    const errorMessage = screen.queryByText("Sorry something went wrong")
    
    expect (errorMessage).toBeFalsy();
})

it("shouldn't render the success message on load" , () => {
    render (<Login />)
    const successMessage = screen.queryByText('Thank you for submitting! We will be in touch');
    expect (successMessage).toBeFalsy();
});

it("should submit the form when all credentials are valid and display success message", () => {
    render (<Login />)

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