import { customRender } from "../../utils/testUtils";
import DeletePrompt from "./DeletePrompt.jsx";

it("Should render DeletePrompt with children", () => {
  const { container } = customRender(<DeletePrompt title={"Title"} />);

  expect(container).toMatchSnapshot();
});
