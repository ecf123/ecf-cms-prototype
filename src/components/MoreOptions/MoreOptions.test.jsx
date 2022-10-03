import { customRender } from "../../utils/testUtils";
import MoreOption from "./MoreOption";

it("Should render layout with children", () => {
  const { container } = customRender(
    <MoreOption />
  );

  expect(container).toMatchSnapshot();
});
