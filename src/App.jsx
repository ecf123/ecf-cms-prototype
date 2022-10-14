// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import "./styles/main.scss";
import PathwayDisplay from "./components/PathwayDisplay/PathwayDisplay";

const App = () => {

  const toggleDisplay = (arg) => console.log(arg);
  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
      
    // </Routes>
    <PathwayDisplay toggleDisplay={toggleDisplay} />
  );
};

export default App;
