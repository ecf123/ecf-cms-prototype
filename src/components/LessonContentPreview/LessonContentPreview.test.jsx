import LessonContentPreview from "./LessonContentPreview";
import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";

const lessons = [{
  title: "Test title",
  content: "Content"
},{
  title: "Test title two",
  content: "Content plus"
}
]

it("Should render the lesson content preview with data", () => {
  const { container } = customRender(<LessonContentPreview lessonsArray={lessons} />);
  expect(container).toMatchSnapshot();
});


it("Should render the lesson content preview without data", () => {
  const { container } = customRender(<LessonContentPreview />);
  expect(container).toMatchSnapshot();
});

it("Should render lesson content with multiple rows", () => {
  render(<LessonContentPreview lessonsArray={lessons} />);
  const description = screen.getByText("Content");
  expect(description).toBeInTheDocument();
  const description2 = screen.getByText("Content plus");
  expect(description2).toBeInTheDocument();
})