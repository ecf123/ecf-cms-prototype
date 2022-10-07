// import Layout from "../../components/Layout/Layout";
   import AddPathway from "../../containers/AddPage/AddPage";

const Home = () => {
  return (
    // <Layout>
    //   <h1>Page Heading</h1>
    //   <h2>Section Heading</h2>
    //   <h3>Panel Heading</h3>
    //   <p>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
    //     dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
    //     maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
    //     necessitatibus.
    //   </p>


      

    // </Layout>

    // shortLabelTextOne, 
    // shortLabelTextTwo, 
    // shortPlaceHolderTextOne, 
    // shortPlaceHolderTextTwo, 
    // freeTypeLabelTextOne, 
    // freeTypeLabelTextTwo, 
    // uploadLabelName

    <AddPathway 
      shortLabelTextOne="Article Name" 
      shortLabelTextTwo="Additional Subtitle(s) (optional)" 
      shortPlaceHolderTextOne="e.g. Financial Forest" 
      shortPlaceHolderTextTwo="e.g. Fund Manager" 
      freeTypeLabelTextOne="Article Overview"
      freeTypeLabelTextTwo="Additional Content (optional)"
    />



    
  );
};

export default Home;
