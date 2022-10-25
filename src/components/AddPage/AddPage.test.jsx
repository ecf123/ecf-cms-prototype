import { customRender } from "../../utils/testUtils";
import AddPage from "./AddPage";

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <AddPage
      shortLabelTextOne="Article Name"
      shortLabelTextTwo="Additional Subtitle(s) (optional)"
      shortPlaceHolderTextOne="e.g. Financial Forest"
      shortPlaceHolderTextTwo="e.g. Fund Manager"
      freeTypeLabelTextOne="Article Overview"
      freeTypeLabelTextTwo="Additional Content (optional)"
    />
  );
  expect(container).toMatchSnapshot();
});

