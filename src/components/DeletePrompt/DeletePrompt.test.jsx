import { customRender } from "../../utils/testUtils";
import DeletePrompt from "./DeletePrompt.jsx";

it("Should render DeletePromt with children", () => {
  const { container } = customRender(
    <DeletePrompt>
      <p>some content</p>
    </DeletePrompt>
  );

  expect(container).toMatchSnapshot();
});

