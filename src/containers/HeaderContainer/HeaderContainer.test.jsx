import { customRender } from "../../utils/testUtils";
import HeaderContainer from "./HeaderContainer";

it("it should render the HeaderContainer", () => {
  const { container } = customRender(<HeaderContainer />);
  expect(container).toMatchSnapshot();
});

it("it should render the HeaderContainer with props", () => {
  const { container } = customRender(
    <HeaderContainer
      classNameSmall={"page-title page-title--small"}
      classNameLarge={"page-title page-title--large"}
      titleSmall={"Pathways"}
      titleLarge={"Financial Forest"}
      profileImg={"man"}
      name={"John Doe"}
      role={"Dev"}
      toggle={"toggle"}
    />
  );
  expect(container).toMatchSnapshot();
});
