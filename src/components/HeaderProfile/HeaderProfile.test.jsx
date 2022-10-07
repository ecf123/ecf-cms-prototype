import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import HeaderProfile from "./HeaderProfile";

it("Should render the HeaderProfile", () => {
  const { container } = customRender(
    <HeaderProfile>
      <p>This is an svg image</p>
      <p>This is an svg image</p>
    </HeaderProfile>
  );
  expect(container).toMatchSnapshot();
});

it("Should render the svg in the Header Profile", () => {
  render(
    <HeaderProfile>
      <p>This is an svg image</p>
      <p>This is an svg image</p>
    </HeaderProfile>
  );
  const svgs = screen.getAllByText("This is an svg image");
  svgs.forEach((svg) => {
    expect(svg).toBeInTheDocument();
  });
});

it("Should display the Name and Role in the HeaderProfile", () => {
  render(
    <HeaderProfile name="Brett Zieme" role="Admin">
      <p>This is an svg image</p>
      <p>This is an svg image</p>
    </HeaderProfile>
  );
  const name = screen.getByText("Brett Zieme");
  const role = screen.getByText("Admin");

  expect(name).toBeInTheDocument();
  expect(role).toBeInTheDocument();
});
