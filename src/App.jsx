// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Card from './components/Card/Card.jsx';

const App = () => {

  const arr = [1, 2, 3, 4]

  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    // </Routes>
    <Card dateOrTime = "12:02" title ="Test" cardInfo ="Hello" links={arr} />
  );
};

export default App;
