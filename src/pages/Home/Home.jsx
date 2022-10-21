import Layout from "../../components/Layout/Layout";
import AddCourseContainer from "../../containers/AddCourseContainer/AddCourseContainer";
import profile from "../../assets/profile-picture.svg";

const Home = () => {
  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };
  return <Layout user={user}>
    <AddCourseContainer />
  </Layout>;
};

export default Home;
