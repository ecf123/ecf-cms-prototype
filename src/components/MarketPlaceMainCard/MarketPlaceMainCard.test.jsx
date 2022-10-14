import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import MarketPlaceMainCard from "./MarketPlaceMainCard";
import rollercoaster from "../../assets/rollercoaster-image.svg";

it("should render every marketPlace main card prop", () => {
  render(
    <MarketPlaceMainCard
      imgDescription="Test alt text"
      date="22/01/2022"
      title="Test Title"
      articleInfo="Test article"
      links={["Word", "Text"]}
      condition="true"
    />
  );

  const imgDescription = screen.getByAltText("Test alt text");
  const date = screen.queryByText("22/01/2022");
  const header = screen.queryByText("Test Title");
  const paragraph = screen.getByText("Test article");

  expect(imgDescription).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});

it("should render an image in the marketplace main card", () => {
  render(
    <MarketPlaceMainCard
      img={rollercoaster}
      imgDescription="Test alt text"
      date="22/01/2022"
      title="Test Title"
      articleInfo="Test article"
      links={["Word", "Text"]}
      condition="true"
    />
  );
  const imgDescription = screen.queryByAltText("Test alt text");
  expect(imgDescription).toBeTruthy();
});

it("should render marketPlace main card with children", () => {
  const { container } = customRender(
    <MarketPlaceMainCard
      date="22/09/2022"
      imgDescription="Test Description"
      title="Test Title"
      articleInfo="Test article"
      links={["Word", "Text"]}
      condition="true"
    />
  );
  expect(container).toMatchSnapshot();
});
