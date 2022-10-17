import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import QuestionContainer from "./containers/QuestionContainer/QuestionContainer";
//import Home from "./pages/Home/Home";
=======
import Home from "./pages/Home/Home";
>>>>>>> fb8df189f185013c155f3dd2f3cf39939ea8ee26
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="*" element={<QuestionContainer />} />
=======
      <Route path="*" element={<Home />} />
>>>>>>> fb8df189f185013c155f3dd2f3cf39939ea8ee26
    </Routes>
  );
};

export default App;
