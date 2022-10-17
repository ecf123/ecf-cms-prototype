import { Route, Routes } from "react-router-dom";
import QuestionContainer from "./containers/QuestionContainer/QuestionContainer";
//import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<QuestionContainer />} />
    </Routes>
  );
};

export default App;
