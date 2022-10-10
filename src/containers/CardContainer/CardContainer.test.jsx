import {render, screen} from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import CardContainer from "./CardContainer";
import image from "../../assets/for-hire-image.svg"

const cards = [{img: image, dateOrTime: '12:24', title: 'no', cardInfo: 'why', links: ["one", "asdf", "454"]}, 
  {img: image, dateOrTime: '12:23', title: 'yes', cardInfo: 'why not', links: ["one", "asdf", "454"]}, 
  {img: image, dateOrTime: '12:23', title: 'yes', cardInfo: 'why not', links: ["one", "asdf", "454"]}
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

it("should render the card component on the screen", () => {
    render(<CardContainer cards = {cards}/>)
    const dateOrTime = screen.getByText("12:24");
    const title = screen.getByText("no");
    const cardInfo = screen.getByText("why");

    expect(dateOrTime).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(cardInfo).toBeInTheDocument();
});