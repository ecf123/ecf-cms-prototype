import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import HeaderProfile from "./HeaderProfile";
import {ReactComponent as Profile} from "../../assets/profile-picture.svg"

it("Should render the HeaderProfile", () => {
  const { container } = customRender(
    <HeaderProfile>
      <Profile/>
    </HeaderProfile>
  );
  expect(container).toMatchSnapshot();
});

it("Should render the svg in the Header Profile", () => {
  render(
    <HeaderProfile>
      <Profile/>
    </HeaderProfile>
  );
  const svg = screen.getByRole("child");
    expect(svg).toBeInTheDocument();
});

it("Should display the Name and Role in the HeaderProfile", () => {
  render(
    <HeaderProfile name="Brett Zieme" role="Admin">
      <Profile/>
    </HeaderProfile>
  );
  const name = screen.getByText("Brett Zieme");
  const role = screen.getByText("Admin");

  expect(name).toBeInTheDocument();
  expect(role).toBeInTheDocument();
});

it("Should display the image alt text if needed", () => {
  render(
    <HeaderProfile name="Brett Zieme" role="Admin">
      <Profile/>
    </HeaderProfile>
  );
  const alt = screen.getByAltText("toggle");
  expect(alt).toBeInTheDocument();
})
