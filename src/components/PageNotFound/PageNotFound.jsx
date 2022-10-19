import "./PageNotFound.scss";
import magnifyingGlass from "../../assets/images/404-not-found-magnifying-glass.png";
import { Link } from "react-router-dom";



const PageNotFound = () => {

  return (
    <div className="pageNotFound">
    <img className="pageNotFound__image" src={magnifyingGlass} alt="A magnifying glass"/>
    <h4 className="pageNotFound__message" >Sorry the page you requested could not be found.</h4>
    <h5 className="pageNotFound__message">Please go back to the home page</h5>
    <Link to="*">
    <button className="pageNotFound__button">Home</button>
    </Link>
   </div>
  )
}

export default PageNotFound