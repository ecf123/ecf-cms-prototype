import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import { BrowserRouter } from "react-router-dom";

import Card from "./Card.jsx";

it("should render the card image", () => {
  //Arrange
  render(<BrowserRouter><Card imgDescription={"Card Image"} /></BrowserRouter>);
  //Act
  const image = screen.getByAltText("Card Image");
  //Assert
  expect(image).toBeInTheDocument();
});

it("should display the date or time on the screen", () => {
  //Arrange
  render(<BrowserRouter><Card dateOrTime="22/01/2022" /></BrowserRouter>);
  //Act
  const date = screen.queryByText("22/01/2022");
  //Assert
  expect(date).toBeInTheDocument();
});

it("should display the header of the card on the screen", () => {
  //Arrange
  render(<BrowserRouter><Card title="Test Title" /></BrowserRouter>);
  //Act
  const header = screen.queryByText("Test Title");
  //Assert
  expect(header).toBeInTheDocument();
});

it("should display the links on the screen", () => {
  //Arrange
  render(<BrowserRouter><Card links={["linkOne"]} /></BrowserRouter>);
  //Act
  const link = screen.getByText("linkOne");
  //Assert
  expect(link).toBeInTheDocument();
});

it("should display the article paragraph on the screen", () => {
  //Arrange
  render(<Card cardInfo="Test card" />);
  //Act
  const paragraph = screen.getByText("Test card");
  //Assert
  expect(paragraph).toBeInTheDocument();
});

it("should render the arrow icon", () => {
  //Arrange
  render(<Card />);
  //Act
  const image = screen.getByAltText("Arrow Icon");
  //Assert
  expect(image).toBeInTheDocument();
});

it("Should render the card with no props", () => {
  const { container } = customRender(<Card />);
  expect(container).toMatchSnapshot();
});

it("Should render the card with props", () => {
  const { container } = customRender(
    <Card
      img="../../assets/for-hire-image.svg"
      dateOrTime="18:25"
      title="Card"
      cardInfo="lorem ipsum"
      links={["one", "two", "three"]}
    />
  );
  expect(container).toMatchSnapshot();
});