import LessonLink from "./LessonLink";
import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("LessonLink component", () => {
  it("matches the snapshot taken", () => {
    const { container } = customRender(
      <LessonLink
        courseDuration={"10 min"}
        courseTitle={"The Role of Banking in the Financial System"}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render all images", () => {
    customRender(
      <LessonLink
        courseTitle="How to win a million dollars"
        courseDuration="10 min"
      />,
      { wrapper: BrowserRouter }
    );
    const images = screen.getAllByRole("img");
    expect(images).toBeTruthy();
  });

  it("should render the heading title and course duration", () => {
    render(
      <LessonLink
        courseTitle="How to win a million dollars"
        courseDuration="10 min"
      />,
      { wrapper: BrowserRouter }
    );
    const title = screen.getByText("How to win a million dollars");
    const duration = screen.getByText("10 min");
    expect(title).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
  });
});
