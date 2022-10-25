import { customRender } from "../../utils/testUtils";
import LandingPageHeader from "./LandingPageHeader";

it("Should render LandingPageHeader", () => {
  const { container } = customRender(<LandingPageHeader />);

  expect(container).toMatchSnapshot();
});
