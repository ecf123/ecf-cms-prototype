import Layout from "../../components/Layout/Layout.jsx";
import AddPage from "../../containers/AddPage/AddPage";

const AddArticle = () => {
  return (
    <Layout>
        <AddPage 
            shortLabelTextOne="Article Name"
            shortLabelTextTwo="Additional Subtitle(s) (optional)"
            shortPlaceHolderTextOne="e.g. Financial Forest"
            shortPlaceHolderTextTwo="e.g. Fund Manager"
            freeTypeLabelTextOne="Article Overview"
            freeTypeLabelTextTwo="Additional Content (optional)"
            uploadLabelName="Article Thumbnail"
            />
    </Layout>
  )
}

export default AddArticle;