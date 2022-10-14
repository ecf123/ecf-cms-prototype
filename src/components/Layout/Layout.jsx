import "./Layout.scss";
import NavBar from  "../NavBar/NavBar"
import HeaderProfile from "../HeaderProfile/HeaderProfile"


const Layout = ({ children }) => {

  return (
  <div className="layout">

    <aside className="layout__nav-bar">
      <NavBar />
    </aside>

    <header className="layout__header">
      <h1 className="layout__header--title">Header</h1>
      <HeaderProfile />
    </header>
    
    <main className="layout__body">
      {children}
    </main>
    
  </div>
  )
};

export default Layout;
