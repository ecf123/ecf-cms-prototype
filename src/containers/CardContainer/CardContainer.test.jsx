import {render, screen} from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import CardContainer from "./CardContainer";
import image from "../../assets/for-hire-image.svg"

const cards = [
  {img: image, dateOrTime: '12:01', title: 'Test title one', cardInfo: 'Test text one', links: ["one", "two", "three"]}, 
  {img: image, dateOrTime: '12:00', title: 'Test title two', cardInfo: 'Test text two', links: ["one", "two", "three"]}, 
];

it("it should match the snapshot with props", () => {
    const { container } = customRender(
      <CardContainer cards={cards} />
    );
    expect(container).toMatchSnapshot();
});

it("Should render the card with no props", () => {
    const { container } = customRender(<CardContainer />);
    expect(container).toMatchSnapshot();
});

it("should render the first card component on the screen", () => {
    render(<CardContainer cards = {cards}/>)
    const dateOrTime = screen.getByText("12:01");
    const title = screen.getByText("Test title one");
    const cardInfo = screen.getByText("Test text one");

    expect(dateOrTime).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(cardInfo).toBeInTheDocument();
});

it("should render the second card component on the screen", () => {
  render(<CardContainer cards = {cards}/>)
  const dateOrTime = screen.getByText("12:00");
  const title = screen.getByText("Test title two");
  const cardInfo = screen.getByText("Test text two");

  expect(dateOrTime).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(cardInfo).toBeInTheDocument();
});