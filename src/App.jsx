import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SinglePathway from "./pages/SinglePathway/SinglePathway";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="pathway" element={<SinglePathway/>} />
    </Routes>
  );
};

export default App;
