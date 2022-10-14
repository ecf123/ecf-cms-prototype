import { customRender } from "../../utils/testUtils";
import Home from "./Home";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

it("Should render layout with children", () => {
  const { container } = customRender(
    <Home/>
  );

  expect(container).toMatchSnapshot();
});
