import { customRender } from "../../utils/testUtils";
import LoginInputBox from "./LoginInputBox";
import { render, screen } from "@testing-library/react";



//snapshot test
it("Should render the login input box component", () => {
    const { container } = customRender(
      <LoginInputBox/>
    );
    expect(container).toMatchSnapshot();
  });

//test for text to appear?
it("should render the correct label", () => {
    render(<LoginInputBox labelText="label"/>)
    const labelText = screen.queryByText("label");
    expect(labelText).toBeInTheDocument();
})

it("should render the input box", () => {
    render(<LoginInputBox />)
    const inputBox = screen.getByAltText("inputbox");
    expect(inputBox).toBeInTheDocument();
})
