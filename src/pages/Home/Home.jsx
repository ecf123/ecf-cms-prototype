import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import bin from "../../assets/bin-icon.svg";

const Home = () => {


  return (
    <Layout>
      < Button style={"button red square-border small"} buttonIcon={bin} buttonText={"Delete"}/>
      < Button style={"button green round-border medium no-img"} buttonText={"Submit"}/>
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
    </Layout>
  );
};

export default Home;
