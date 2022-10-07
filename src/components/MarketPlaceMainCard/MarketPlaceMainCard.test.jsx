import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import MarketPlaceMainCard from "./MarketPlaceMainCard";

it("should render marketPlace main card and display the card image, date, header and info paragraph", () => {
  
  render(<MarketPlaceMainCard imgDescription="Test alt text" />);
  const image = screen.getByAltText("Test alt text");
  expect(image).toBeInTheDocument();

  render(<MarketPlaceMainCard date="22/01/2022" />);
  const date = screen.queryByText("22/01/2022");
  expect(date).toBeInTheDocument();

  render(<MarketPlaceMainCard title="Test Title" />);
  const header = screen.queryByText("Test Title");
  expect(header).toBeInTheDocument();

  render(<MarketPlaceMainCard articleInfo="Test article" />);
  const paragraph = screen.getByText("Test article");
  expect(paragraph).toBeInTheDocument();


});

it("should render marketPlace main card with children", () => {
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