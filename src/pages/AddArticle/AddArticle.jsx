import AddPageContainer from "../../containers/AddPageContainer/AddPageContainer";

const AddArticle = () => {
  return (
    <AddPageContainer
      shortLabelTextOne="Article Name"
      shortLabelTextTwo="Additional Subtitle(s) (optional)"
      shortPlaceHolderTextOne="e.g. Financial Forest"
      shortPlaceHolderTextTwo="e.g. Fund Manager"
      freeTypeLabelTextOne="Article Overview"
      freeTypeLabelTextTwo="Additional Content (optional)"
      uploadLabelName="Article Thumbnail"
    />
  );
};

export default AddArticle;
