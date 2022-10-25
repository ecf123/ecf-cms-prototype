import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import AddArticle from "./pages/AddArticle/AddArticle.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AddArticle />} />
    </Routes>
  );
};

export default App;
