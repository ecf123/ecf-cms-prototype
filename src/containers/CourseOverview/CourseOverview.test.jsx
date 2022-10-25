import { customRender } from "../../utils/testUtils";
import CourseOverview from "./CourseOverview";

it("Should render the course overview container", () => {
  const { container } = customRender(<CourseOverview />);
  expect(container).toMatchSnapshot();
});
