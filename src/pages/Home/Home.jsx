import Layout from "../../components/Layout/Layout";
import AddCourseContainer from "../../containers/AddCourseContainer/AddCourseContainer";
import profile from "../../assets/profile-picture.svg";
const Home = () => {
  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };
  return (
    <Layout user={user}>
      <AddCourseContainer shortLabelTextOne={"Course Name"} freeTypeLabelTextOne={"Course Overview"} shortLabelTextTwo={"Course Provider"} shortPlaceHolderTextTwo={"E.G Barclays..."} shortLabelTextThree={"Course Mentor"} shortPlaceHolderTextThree={"E.G Barclays"} uploadLabelName={"Course Thumbnail"} uploadLabelNameTwo={"Provider Logo"}/>
    </Layout>
  );
};

export default Home;
