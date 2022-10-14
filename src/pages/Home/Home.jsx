import Layout from "../../components/Layout/Layout";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";

const Home = () => {
  return <Layout>
    <HeaderContainer classNameSmall={"page-title--small"} classNameLarge={"page-title--large"} titleSmall={"Pathways"} titleLarge={"Financial Forest"} profileImg={"man"} name={"John Doe"} role={"Dev"} toggle={"toggle"} />
  </Layout>;
};

export default Home;
