import PathwayIntroduction from "./PathwayIntroduction";
import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";

describe("PathwayIntroduction component", () => {
  it("matches the snapshot taken", () => {
    const { container } = customRender(<PathwayIntroduction />);
    expect(container).toMatchSnapshot();
  });

  it("renders the image", () => {
    render(<PathwayIntroduction />);
    const image = screen.getByAltText("pathway thumbnail");
    expect(image).toBeInTheDocument();
  });

  it("renders the image correctly", () => {
    render(
      <PathwayIntroduction image="../../assets/money-growing-on-tree.svg" />
    );
    const image = screen.queryByText("pathway thumbnail");
    expect(image).toBeFalsy();
  });

  it("renders the description", () => {
    render(<PathwayIntroduction description={"Description"} />);
    const description = screen.getByText("Description");
    expect(description).toBeInTheDocument();
  });
});
