import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";
import video from "../../assets/holding-card.svg";

import IndexCard from "./IndexCard";

it("should render the index card with all of props", () => {
  const { container } = customRender(
    <IndexCard
      video={video}
      title={"The Role Of Banking In The Financial System"}
      duration={"15 minutes"}
      lessonText={"Mattis duis sed leo quis justo, faucibus sit."}
    />
  );

  expect(container).toMatchSnapshot();
});

it("Should not display the alt text if the video is present", () => {
  render(<IndexCard video={video} altText={"video"} />);
  const altText = screen.queryByAltText("video");
  expect(altText).toBeFalsy();
});

it("Should render title, duration and paragraph text in the card", () => {
  render(
    <IndexCard
      title={"The Role Of Banking In The Financial System"}
      duration={"15 minutes"}
      lessonText={"Mattis duis sed leo quis justo, faucibus sit."}
    />
  );
  const title = screen.getByText("The Role Of Banking In The Financial System");
  const duration = screen.getByText("15 minutes");
  const paragraph = screen.getByText(
    "Mattis duis sed leo quis justo, faucibus sit."
  );

  expect(title).toBeInTheDocument();
  expect(duration).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
