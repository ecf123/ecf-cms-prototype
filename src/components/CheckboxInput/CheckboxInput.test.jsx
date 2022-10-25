import { customRender } from "../../utils/testUtils";
import CheckboxInput from "./CheckboxInput.jsx";

it("Should match the snapshot", () => {
  const { container } = customRender(<CheckboxInput />);

  expect(container).toMatchSnapshot();
});
