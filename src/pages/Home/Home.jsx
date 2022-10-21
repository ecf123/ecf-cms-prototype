import Layout from "../../components/Layout/Layout";
import profile from "../../assets/profile-picture.svg";
const Home = () => {

const user = {
  image: profile,
  name: "Brett Zieme",
  role: "Admin",
};
  return <Layout user={user}>
  </Layout>;
};
export default Home;