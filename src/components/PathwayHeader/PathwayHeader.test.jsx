import PathwayHeader from "./PathwayHeader";
import { customRender } from "../../utils/testUtils";

describe("PathwayHeader component", () => {
    it("matches the snapshot taken", () => {
    const { container } = customRender(<PathwayHeader link="*"/>);
    expect(container).toMatchSnapshot();
    });
});
