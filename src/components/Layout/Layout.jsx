import "./Layout.scss";
import NavBar from  "../NavBar/NavBar"
import HeaderProfile from "../HeaderProfile/HeaderProfile"


const Layout = ({ children }) => {
  return (
  
  <div className="layout">

    <div className="layout__nav-bar">
      <NavBar />
    </div>

    <div className="layout__header">
      <h1 className="layout__header--title">Header</h1>
      <HeaderProfile />
    </div>


    <div>
      {children}
    </div>
    
    
  
  </div>
  )
};

export default Layout;
