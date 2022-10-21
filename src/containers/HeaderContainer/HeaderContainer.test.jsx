import { customRender } from "../../utils/testUtils";
import HeaderContainer from "./HeaderContainer";

it("it should render the HeaderContainer", () => {
  const { container } = customRender(<HeaderContainer />);
  expect(container).toMatchSnapshot();
});