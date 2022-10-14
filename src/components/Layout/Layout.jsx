import "./Layout.scss";
import NavBar from  "../NavBar/NavBar"
import HeaderProfile from "../HeaderProfile/HeaderProfile"


const Layout = ({ children, user }) => {
  const { image, name, role } = user;

  return (
  <div className="layout">

    <aside className="layout__nav-bar">
      <NavBar />
    </aside>

    <header className="layout__header">
      <h1 className="layout__header--title">Header</h1>
      <HeaderProfile name={name} profileImg={image} role={role} />
    </header>
    
    <main className="layout__body">
      {children}
    </main>
    
  </div>
  )
};

export default Layout;
