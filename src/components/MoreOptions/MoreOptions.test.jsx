import { customRender } from "../../utils/testUtils";
import MoreOption from "./MoreOption";

it("Should render MoreOption component", () => {
  const { container } = customRender(
    <MoreOption />
  );

  expect(container).toMatchSnapshot();
});
