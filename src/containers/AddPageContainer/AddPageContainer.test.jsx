import { customRender } from "../../utils/testUtils";
import AddPageContainer from "./AddPageContainer";

it("it should match the snapshot with props", () => {
    const { container } = customRender(<AddPageContainer />);
    expect(container).toMatchSnapshot();
});

  