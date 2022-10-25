import { customRender } from "../../utils/testUtils";
import AddCourseContainer from "./AddCourseContainer";

it("it should match the snapshot", () => {
  const { container } = customRender(<AddCourseContainer />);
  expect(container).toMatchSnapshot();
});
