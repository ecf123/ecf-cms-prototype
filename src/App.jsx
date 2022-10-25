import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import AddLesson from "./pages/AddLesson/AddLesson";


const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AddLesson />} />
    </Routes>
  );
};

export default App;
