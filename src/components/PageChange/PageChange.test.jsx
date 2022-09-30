import {render, screen} from "@testing-library/react"
import { customRender } from "../../utils/testUtils";
import PageChange from "./PageChange";

it("should show the page number on screen", () => {
    //.1 Arrange
    render(<PageChange/>)

    //.2 Act
    const pageNumber = screen.findByText(/2/i);
    //const PageRight = screen.findByDisplayValue(">");



    //3. Assert
    expect(pageNumber).toBeInTheDocument();
    //expect(PageRight).toBeInTheDocument();
}) 
