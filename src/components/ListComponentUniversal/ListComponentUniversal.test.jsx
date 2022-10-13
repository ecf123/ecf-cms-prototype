import { render, screen } from "@testing-library/react";
import { Table } from "antd";
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
it("should render the list component universal with multiple columns and rows", () => {
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
  ];
  render(<Table columns={columns} dataSource={data} />);
  const cell = screen.getByText("20hrs");
  expect(cell).toBeInTheDocument();
});