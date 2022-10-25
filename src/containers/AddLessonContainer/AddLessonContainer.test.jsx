import { customRender } from "../../utils/testUtils";
import AddLessonContainer from "./AddLessonContainer";

it("it should match the snapshot", () => {
    const { container } = customRender(
      <AddLessonContainer  />
    );
    expect(container).toMatchSnapshot();
  });