import { customRender } from "../../utils/testUtils";
import { getByText, fireEvent } from "@testing-library/react";
import ViewOptions from "./ViewOptions";

it("Should render the view options component", () => {
    const { container } = customRender(<ViewOptions />);
    expect(container).toMatchSnapshot();
  });

  it("shows Overview as selected on load", () => {
    const { container } = customRender(<ViewOptions />);
  
    const overview = getByText(container, "Overview");
  
    expect(overview).toHaveStyle(
      "background: none repeat scroll 0 0 #B4DDC0;"
    );
  });

  it("shows Courses as selected on when clicked", () => {
    const { container } = customRender(<ViewOptions />);
  
    const courses = getByText(container, "Courses");
  
    expect(courses).toHaveStyle("opacity:40%;");
  
    fireEvent.click(courses);
  
    expect(courses).toHaveStyle("background: none repeat scroll 0 0 #B4DDC0; opacity:100%;");
  });