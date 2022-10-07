import Layout from "../../components/Layout/Layout";
import PathwayIntroduction from "../../components/PathwayIntroduction/PathwayIntroduction";
import moneyTree from "../../assets/money-growing-on-tree.svg"

const Home = () => {
  return (
    <Layout>
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
      <PathwayIntroduction img={moneyTree} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non errordolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatismaxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,necessitatibus."}/>
    </Layout>

  );
};

export default Home;
