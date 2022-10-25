import "./LandingPageHeader.scss";
import logo from "../../assets/logo-dark-bg.svg"

const LandingPageHeader = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  )
}

export default LandingPageHeader