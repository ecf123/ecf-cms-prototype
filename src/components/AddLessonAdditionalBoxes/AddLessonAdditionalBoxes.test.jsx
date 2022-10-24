import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import AddLessonAdditionalBoxes from "../../components/AddLessonAdditionalBoxes/AddLessonAdditionalBoxes";

it("Should render the AddLessonAdditionalBoxes with props", () => {
  const { container } = customRender(
    <AddLessonAdditionalBoxes
      shortLabelText="Additional Subtitle(s) (optional)"
      shortPlaceHolderText="e.g. Fund Manager"
      freeTypeLabelText="Additional Content (optional)"
    />
  );
  expect(container).toMatchSnapshot();
});

it("Should display the freeType content, shortPlaceholderText and shortLabelText", () => {
  render(
    <AddLessonAdditionalBoxes
      freeTypeLabelText="Additional Content (optional)"
      shortPlaceHolderText="e.g. Fund Manager"
      shortLabelText="Additional Subtitle(s) (optional)"
    />
  );

  const text = screen.getByText("Additional Content (optional)");
  expect(text).toBeInTheDocument();

  const placeholder = screen.getByPlaceholderText("e.g. Fund Manager");
  expect(placeholder).toBeInTheDocument();

  const label = screen.getByText("Additional Subtitle(s) (optional)");
  expect(label).toBeInTheDocument();
});
