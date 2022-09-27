import { render, screen} from "@testing-library/react";
import ArticleListCards from "./ArticleListCards";

it ( "should render the card", () => {
    //Arrange
    render(<ArticleListCards />);
    //Act
    const image = screen.getByAltText("hire");
    //Assert
    expect(image).toBeInTheDocument();
})

it ("should display the date of the card on the screen", () => {
    //Arrange
    render(<ArticleListCards />);
    //Act
    const date = screen.queryByText("27/09/2022");
    //Assert
    expect(date).toBeInTheDocument();
})

it ("should display the header of the card on the screen", () => {
    //Arrange
    render(<ArticleListCards />);
    //Act
    const header = screen.queryByText("Want a winning CV? Try these 5 tips");
    //Assert
    expect(header).toBeInTheDocument();
})

it ("should display the links on the screen", () => {
    //Arrange
    render(<ArticleListCards />);
    //Act
    const link1 = screen.getByText("Professional Development");
    const link2 = screen.getByText("Career");
    //Assert
    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
})



