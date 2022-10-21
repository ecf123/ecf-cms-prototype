import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";
import AddCourse from "./AddCourse";

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <AddCourse
      shortLabelTextOne={"Course Name"}
      freeTypeLabelTextOne={"Course Overview"}
      shortLabelTextTwo={"Course Provider"}
      shortPlaceHolderTextTwo={"e.g Barclays..."}
      shortLabelTextThree={"Course Mentor"}
      shortPlaceHolderTextThree={"e.g Barclays"}
      uploadLabelName={"Course Thumbnail"}
      uploadLabelNameTwo={"Provider Logo"}
    />
  );

  expect(container).toMatchSnapshot();
});

it("should have 2 buttons", () => {
  render(
    <AddCourse
      shortLabelTextOne={"Course Name"}
      freeTypeLabelTextOne={"Course Overview"}
      shortLabelTextTwo={"Course Provider"}
      shortPlaceHolderTextTwo={"e.g Barclays..."}
      shortLabelTextThree={"Course Mentor"}
      shortPlaceHolderTextThree={"e.g Barclays"}
      uploadLabelName={"Course Thumbnail"}
      uploadLabelNameTwo={"Provider Logo"}
    />
  );
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(4);
});
