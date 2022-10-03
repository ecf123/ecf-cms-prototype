import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";

import ArticleListCards from "./ArticleListCards";

it("should render the card image", () => {
  //Arrange
  render(<ArticleListCards />);
  //Act
  const image = screen.getByAltText("Article Image");
  //Assert
  expect(image).toBeInTheDocument();
});

it("should display the date of the card on the screen", () => {
  //Arrange
  render(<ArticleListCards date="22/01/2022" />);
  //Act
  const date = screen.queryByText("22/01/2022");
  //Assert
  expect(date).toBeInTheDocument();
});

it("should display the header of the card on the screen", () => {
  //Arrange
  render(<ArticleListCards title="Test Title" />);
  //Act
  const header = screen.queryByText("Test Title");
  //Assert
  expect(header).toBeInTheDocument();
});

it("should display the links on the screen", () => {
  //Arrange
  render(
    <ArticleListCards
      articleLinkOne="Test Link One"
      articleLinkTwo="Test Link Two"
    />
  );
  //Act
  const link1 = screen.getByText("Test Link One");
  const link2 = screen.getByText("Test Link Two");
  //Assert
  expect(link1).toBeInTheDocument();
  expect(link2).toBeInTheDocument();
});

it("should display the article paragraph on the screen", () => {
  //Arrange
  render(<ArticleListCards articleInfo="Test article" />);
  //Act
  const paragraph = screen.getByText("Test article");
  //Assert
  expect(paragraph).toBeInTheDocument();
});

it("should render the arrow icon", () => {
  //Arrange
  render(<ArticleListCards />);
  //Act
  const image = screen.getByAltText("Arrow Icon");
  //Assert
  expect(image).toBeInTheDocument();
});

it("Should render layout with children", () => {
  const { container } = customRender(
    <ArticleListCards
      date="22/09/2022"
      title="Test Title"
      articleInfo="Test article"
      articleLinkOne="test link"
      articleLinkTwo="test link"
    />
  );
  expect(container).toMatchSnapshot();
});
