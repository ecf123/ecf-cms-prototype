import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import MarketPlaceMainCard from "./MarketPlaceMainCard";

it("should render the card image", () => {
  render(<MarketPlaceMainCard imgDescription="Test alt text" />);
  const image = screen.getByAltText("Test alt text");
  expect(image).toBeInTheDocument();
});

it("should display the date of the card on the screen", () => {
  render(<MarketPlaceMainCard date="22/01/2022" />);
  const date = screen.queryByText("22/01/2022");
  expect(date).toBeInTheDocument();
});

it("should display the header of the card on the screen", () => {
  render(<MarketPlaceMainCard title="Test Title" />);
  const header = screen.queryByText("Test Title");
  expect(header).toBeInTheDocument();
});

it("should display the article paragraph on the screen", () => {
  render(<MarketPlaceMainCard articleInfo="Test article" />);
  const paragraph = screen.getByText("Test article");
  expect(paragraph).toBeInTheDocument();
});

it("Should render layout with children", () => {
  const { container } = customRender(
    <MarketPlaceMainCard
      date="22/09/2022"
      imgDescription="Test Description"
      title="Test Title"
      articleInfo="Test article"
    />
  );
  expect(container).toMatchSnapshot();
});