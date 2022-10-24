import LessonContentPreviewItem from "./LessonContentPreviewItem";
import { customRender } from "../../utils/testUtils";

const lesson = {
  title: "Test title",
  content: "Content"
}

it("Should render the preview item with props", () => {
  const { container } = customRender(<LessonContentPreviewItem lesson={lesson} />);
  expect(container).toMatchSnapshot();
});

it("Should render the preview item without props", () => {
  const { container } = customRender(<LessonContentPreviewItem />);
  expect(container).toMatchSnapshot();
});