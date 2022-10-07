// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import CardContainer from "./containers/CardContainer/CardContainer";
import "./styles/main.scss";
import image from './assets/for-hire-image.svg'

const App = () => {

  const cards = [{img: image,
                  dateOrTime: '12:23',
                  title: 'yes',
                  cardInfo: 'why not',
                  links: ["one", "asdf", "454"]
                }, 
                {img: image,
                  dateOrTime: '12:23',
                  title: 'yes',
                  cardInfo: 'why not',
                  links: ["one", "asdf", "454"]
                }, {img: image,
                dateOrTime: '12:23',
                title: 'yes',
                cardInfo: 'why not',
                links: ["one", "asdf", "454"]
              }];
  return (
    // <Routes>
    //   <Route path="*" element={<Home />} />
    // </Routes>
    <CardContainer cards = {cards}/>
  );
};

export default App;