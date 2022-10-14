import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Short from "./components/Short/Short";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route
        path="/FinancialForest+1"
        element={<Short freeTypeLabelText="hello" />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
