import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import AddPrizePage from "./pages/AddPrizePage/AddPrizePage";
const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AddPrizePage />} />
    </Routes>
  );
};

export default App;
