import Layout from "../../components/Layout/Layout";
import CourseOverview from "../../containers/CourseOverview/CourseOverview";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
const Home = () => {
  return <Layout>
    <HeaderContainer
  titleLarge={"financial forest"}/> 
    <CourseOverview />
  </Layout>;
};

export default Home;
