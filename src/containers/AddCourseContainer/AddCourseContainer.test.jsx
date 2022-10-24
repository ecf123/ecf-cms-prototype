import { customRender } from "../../utils/testUtils";
import AddCourseContainer from "./AddCourseContainer";

it("it should match the snapshot with props", () => {
    const { container } = customRender(<AddCourseContainer shortLabelTextOne={"Course Name"}/>);
    expect(container).toMatchSnapshot();
});

