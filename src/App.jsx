// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import CardContainer from "./containers/CardContainer/CardContainer";
import "./styles/main.scss";
import image from './assets/for-hire-image.svg'

const App = () => {

  

  const cards = [
    {img: image, dateOrTime: '12:01', title: 'Test title one', cardInfo: 'Test text one', links: ["one", "two", "three"]}, 
    {img: image, dateOrTime: '12:00', title: 'Test title two', cardInfo: 'Test text two', links: ["one", "two", "three"]}, 
  ];


  
  return (
    <CardContainer cards={cards} />
  
    // <Routes>
    //   <Route path="*" element={<Home />} />
    // </Routes>
  );
};

export default App;
