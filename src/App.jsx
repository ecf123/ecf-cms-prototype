import { Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion/AddQuestion";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AddQuestion />} />
    </Routes>
  );
};

export default App;
