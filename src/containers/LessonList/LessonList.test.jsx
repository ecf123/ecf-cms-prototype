import { render, screen } from "@testing-library/react";
import LessonList from "./LessonList";
import { customRender } from "../../utils/testUtils";
import { BrowserRouter } from "react-router-dom";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const dataJSON = [
    {
      id: "kjsvswkvfsihvds",
      challenges: [
        {
          duration: "15 minutes",
          type: "assignment",
        },
        {
          duration: "1 hrs",
          type: "assignment",
        },
      ],
      lessons: [
        {
          duration: "15 minutes",
          type: "Video",
        },
        {
          duration: "10 minutes",
          type: "Video",
        },
        {
          duration: "15 minutes",
          type: "Video",
        },
      ],
      title: "Halifax",
      name: "Halifax as provider",
    },
    {
      id: "fsdfsdfdghsfghs",
      challenges: [
        {
          duration: "30 minutes",
          type: "assignment",
        },
        {
          duration: "2 hrs 20 minutes",
          type: "assignment",
        },
      ],
      lessons: [
        {
          duration: "25 minutes",
          type: "Video",
        },
        {
          duration: "10 minutes",
          type: "Video",
        },
        {
          duration: "15 minutes",
          type: "Video",
        },
      ],
      title: "Barclays",
      name: "Barclays as provider",
    },
  ];

it("it should match the snapshot with props", () => {
  const { container } = customRender(
    <LessonList dataJSON={dataJSON}/>
  );
  expect(container).toMatchSnapshot();
});

it("Should render the first row", () => {
  render(<LessonList dataJSON={dataJSON} />, {wrapper: BrowserRouter});
  const courseDuration = screen.getByText("115");
  const courseProvider = screen.getByText("Halifax");
  expect(courseDuration).toBeInTheDocument();
  expect(courseProvider).toBeInTheDocument();
});

it("Should render the second row", () => {
    render(<LessonList dataJSON={dataJSON} />, {wrapper: BrowserRouter});
    const courseDuration = screen.getByText("220");
    const courseProvider = screen.getByText("Barclays");
    expect(courseDuration).toBeInTheDocument();
    expect(courseProvider).toBeInTheDocument();
  });