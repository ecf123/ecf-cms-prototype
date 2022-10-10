import { customRender } from "../../utils/testUtils";
import Overview from "./Overview"


it("renders the Overview", () => {
  const { container } = customRender(<Overview />);
  expect(container).toMatchSnapshot();
});