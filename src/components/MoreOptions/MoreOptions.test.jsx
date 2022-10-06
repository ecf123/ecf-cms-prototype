import { customRender } from "../../utils/testUtils";
import MoreOptions from "./MoreOptions";

it("Should render MoreOption component", () => {
  const { container } = customRender(<MoreOptions title={"More"} />);

  expect(container).toMatchSnapshot();
});
