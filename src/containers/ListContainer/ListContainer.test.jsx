import ListContainer from "./ListContainer";
import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import image from "../../assets/for-hire-image.svg";
import userEvent from "@testing-library/user-event";

const cards = [
  {
    img: image,
    dateOrTime: "12:01",
    title: "Test title one",
    cardInfo: "Test text one",
    links: ["one", "two", "three"],
  },
  {
    img: image,
    dateOrTime: "12:00",
    title: "Test title two",
    cardInfo: "Test text two",
    links: ["one", "two", "three"],
  },
];

it("it should match the snapshot without props", () => {
  const { container } = customRender(<ListContainer />);
  expect(container).toMatchSnapshot();
});

it("it should match the snapshot with props", () => {
  const { container } = customRender(
    <ListContainer cards={cards} title="title" />
  );
  expect(container).toMatchSnapshot();
});

it("should render the title on the screen", () => {
  customRender(<ListContainer title="Title" />);
  const title = screen.getByText("Title List");

  expect(title).toBeInTheDocument();
});

it("should render the input box on the screen", () => {
  customRender(<ListContainer />);
  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();
});

it("should render the 'add course' button on the screen", () => {
  customRender(<ListContainer />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("should display the first card only if search 'one'", () => {
  customRender(<ListContainer cards={cards} />);

  const searchCard1 = screen.getByText("Test title one");
  const searchCard2 = screen.getByText("Test title two");
  const searchBox = screen.getByRole("textbox");

  expect(searchCard1).toBeInTheDocument();
  expect(searchCard2).toBeInTheDocument();

  userEvent.type(searchBox, "one");
  const searchCardFiltered1 = screen.getByText("Test title one");
  const searchCardFiltered2 = screen.queryByText("Test title two");

  expect(searchCardFiltered1).toBeInTheDocument();
  expect(searchCardFiltered2).not.toBeInTheDocument();
});
