import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";

import CategoriesMenu from "./CategoriesMenu.jsx";

const links = ["one", "two", "three"];

it("should render the category options", () => {
  //Arrange
  render(<CategoriesMenu links={links} condition={false} />);
  //Act
  const link = screen.getByText("one");
  //Assert
  expect(link).toBeInTheDocument();
});

it("should render icon images if condition set to true", () => {
  //Arrange
  render(<CategoriesMenu links={links} condition={true} />);
  //Act
  const icons = screen.getAllByAltText("Icon");
  //Assert
  icons.forEach((icon) => {
    expect(icon).toBeInTheDocument();
  });
});

it("Should render the category options with props", () => {
  const { container } = customRender(
    <CategoriesMenu links={links} condition={false} />
  );
  expect(container).toMatchSnapshot();
});
