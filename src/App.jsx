import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FreeType from "./components/InputBoxFreeType/FreeType";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/FinancialForest+1" element={<FreeType freeTypeLabelText="hello"/>} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
