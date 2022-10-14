import { Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion/AddQuestion";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {

  const answer = ["Adrian", "Atif", "Andy", "Connel"];
  const question = "What is my name"
  const questionNumber = 1

  return (
    <Routes>
      <Route path="*" element={<AddQuestion question= {question} answers={answer} questionNumber={questionNumber}/>} />
    </Routes>
  );
};

export default App;
