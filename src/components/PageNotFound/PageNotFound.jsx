import "./PageNotFound.scss";
import magnifyingGlass from "../../assets/images/404-not-found-magnifying-glass.png";
import Home from "../../pages/Home/Home";


const PageNotFound = () => {

  return (
    <div className="error">
    <img className="error__image" src={magnifyingGlass} alt="A magnifying glass"/>
    <h4 className="error__message" >Sorry the page you requested could not be found.</h4>
    <h5 className="error__message">Please go back to the home page</h5>
    <button className="error__button" onClick={<Home />}>Home</button>
    
   </div>
  )
}

export default PageNotFound