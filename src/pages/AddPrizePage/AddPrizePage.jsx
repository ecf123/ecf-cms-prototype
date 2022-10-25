import Layout from "../../components/Layout/Layout.jsx";
import AddPrize from "../../containers/AddPrize/AddPrize";

const AddPrizePage = () => {
  return (
    <Layout>
      <AddPrize
        shortLabelTextOne="Prize Name"
        shortLabelTextTwo="XP Required"
        shortPlaceHolderTextOne="Get two tickets to Thorpe Park for you and two others"
        shortPlaceHolderTextTwo=""
        freeTypeLabelTextOne="Prize Description"
        shortLabelTextThree="Pathways Required"
        shortPlaceHolderTextThree=""
        uploadLabelName="Pathway Thumbnail"
      />
    </Layout>
  );
};
export default AddPrizePage;
