import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import ListComponentUniversal from "./ListComponentUniversal";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const data = [
  {
    key: 1,
    no_of_courses: `8`,
    no_of_lessons: `8`,
    est_completion_time: `20hrs`,
  },
  {
    key: 2,
    no_of_courses: `24`,
    no_of_lessons: `48`,
    est_completion_time: `40hrs`,
  },
];

it("renders the ListComponentUniversal with data", () => {
  const { container } = customRender(<ListComponentUniversal data={data} />);
  expect(container).toMatchSnapshot();
});

it("should render the list component universal with multiple columns and with one row", () => {
  render(<ListComponentUniversal data={data} />);
  const cell = screen.getByText("20hrs");
  expect(cell).toBeInTheDocument();
});

it("should render the list component universal with multiple columns and with multiple rows", () => {
  render(<ListComponentUniversal data={data} />);
  const cell = screen.getByText("48");
  expect(cell).toBeInTheDocument();
});

it("should render table headers in capitals without underscores", () => {
  render(<ListComponentUniversal data={data} />);
  const header = screen.getByText("NO OF LESSONS");
  expect(header).toBeInTheDocument();
});
