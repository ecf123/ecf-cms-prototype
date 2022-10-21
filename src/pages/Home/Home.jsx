import Layout from "../../components/Layout/Layout";
import CourseOverview from "../../containers/CourseOverview/CourseOverview";
import ViewOptions from "../../components/ViewOptions/ViewOptions"
const Home = () => {
  return <Layout> 
    <ViewOptions selectedOption={"Overview"}/>
    <CourseOverview />
  </Layout>;
};
export default Home;