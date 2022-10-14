import { Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion/AddQuestion";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {

  const answer = ["Value: £15.99", "Flavours Exp 31/07/22", "Items: Grenade Carb Killa Protein Bars - 12 X 60g - All", "Service: Yodel Direct"];

  return (
    <Routes>
      <Route path="*" element={<AddQuestion answers={answer}/>} />
    </Routes>
  );
};

export default App;
