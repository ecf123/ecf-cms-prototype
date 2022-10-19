import { Route, Routes } from "react-router-dom";
//import Home from "./pages/Home/Home";
import QuestionContainer from "./containers/QuestionContainer/QuestionContainer";
import "./styles/main.scss";

const App = () => {

  const questionsArray = [
    {question:"What sells on Amazon the most", 
    answers: ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"],
    questionNumber: 1},
    {question:"What sells on Amazon the most", 
    answers: ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"],
    questionNumber: 1},
    {question:"What sells on Amazon the most", 
    answers: ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"],
    questionNumber: 1},
    {question:"What sells on Amazon the most", 
    answers: ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"],
    questionNumber: 1},
    {question:"What sells on Amazon the most", 
    answers: ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"],
    questionNumber: 1},
    {question:"What sells on Amazon the most", 
    answers: ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"],
    questionNumber: 1}
  ]

  return (
    <Routes>
      <Route path="*" element={<QuestionContainer questionsArray={questionsArray}/>} />
    </Routes>
    
  );
};

export default App;
