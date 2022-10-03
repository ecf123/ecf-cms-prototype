import {render, screen} from "@testing-library/react"
import { customRender } from "../../utils/testUtils";
import PageChange from "./PageChange";

it("should show the page number on screen", () => {
    //.1 Arrange
    render(<PageChange totalPages={20}/>)

    //.2 Act
    const pageNumber = screen.findByText(/2/i);
    const PageRight = screen.findByDisplayValue(">");

    //3. Assert
    expect(pageNumber).toBeTruthy();
    expect(PageRight).toBeTruthy();
}) 

it("Should render PageChange", () => {
    const { container } = customRender(
    <PageChange/>
    );

    expect(container).toMatchSnapshot();
});


it("Should render PageChange with props", () => {
    const { container } = customRender(
    <PageChange totalPages={20}/>
    );

    expect(container).toMatchSnapshot();
});
