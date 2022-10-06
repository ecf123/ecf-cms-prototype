// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Card from './components/Card/Card.jsx';
import image from "./assets/for-hire-image.svg"

const App = () => {

  const arr = ["Developer", "Developer"]

  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    // </Routes>
    <Card img = {image} dateOrTime = "12:02" title ="Test" cardInfo ="lorafffffffff fffffffffffff ffffffffffsdfgdgsdfgsdfgsdfgsdfgsdfgsdfgs dfgsdfgsdfgsdfg sdfdfgsdfssdfgfffffffem" links={arr} />
  );
};

export default App;
