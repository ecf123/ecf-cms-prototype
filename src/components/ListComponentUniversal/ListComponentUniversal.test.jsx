import { render, screen } from "@testing-library/react";
import { Table } from "antd";
import { customRender } from "../../utils/testUtils";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const columns = [
  {
    key: 1,
    title: "NO OF COURSES",
    dataIndex: "no_of_courses",
  },
  {
    title: "NO OF LESSONS",
    dataIndex: "no_of_lessons",
  },
  {
    title: "EST. COMPLETION TIME",
    dataIndex: "est_completion_time",
  },
];
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

it("renders the ListComponentUniversal without props", () => {
  const { container } = customRender(<Table />);
  expect(container).toMatchSnapshot();
});

it("renders the ListComponentUniversal with props", () => {
  const { container } = customRender(
    <Table columns={columns} dataSource={data} />
  );
  expect(container).toMatchSnapshot();
});

it("should render the list component universal with multiple columns and with one row", () => {
  render(<Table columns={columns} dataSource={data} />);
  const cell = screen.getByText("20hrs");
  expect(cell).toBeInTheDocument();
});

it("should render the list component universal with multiple columns and with multiple rows", () => {
  render(<Table columns={columns} dataSource={data} />);
  const cell = screen.getByText("48");
  expect(cell).toBeInTheDocument();
});
