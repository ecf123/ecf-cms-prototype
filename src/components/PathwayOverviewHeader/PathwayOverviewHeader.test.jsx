import PathwayOverviewHeader from "./PathwayOverviewHeader";
import { customRender } from "../../utils/testUtils";

describe("PathwayOverviewHeader component", () => {
  it("matches the snapshot taken", () => {
    const { container } = customRender(<PathwayOverviewHeader link="*" />);
    expect(container).toMatchSnapshot();
  });
});
