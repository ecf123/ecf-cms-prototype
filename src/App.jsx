import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={< PageNotFound/>} />
    </Routes>
  );
};

export default App;
