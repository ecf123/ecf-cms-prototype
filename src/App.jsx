import { Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion/AddQuestion";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {

  const answer = ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"];
  const question = "Which Product does Adrian sell the most on Amazon"
  const questionNumber = 7

  return (
    <Routes>
      <Route path="*" element={<AddQuestion question= {question} answers={answer} questionNumber={questionNumber}/>} />
    </Routes>
  );
};

export default App;
