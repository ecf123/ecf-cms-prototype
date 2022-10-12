import { Route, Routes } from "react-router-dom";
import PathwayHeader from "./components/PathwayHeader/PathwayHeader";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";
import headingImage from "./assets/mobile-growing-investment.svg"
import companyIcon from "./assets/barclays-icon-white-background.svg"

const App = () => {  

  const links = ["Finance", "Investing"];
  return (  
    <Routes>
      <Route path="*" element={<PathwayHeader headingTitle = "Commercial Banking with Barclay's" 
      headingImage = {headingImage} companyIcon = {companyIcon} links = {links} condition = {false}/>} />
    </Routes>
  );
};

export default App;
