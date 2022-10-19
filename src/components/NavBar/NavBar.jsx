import Logo from "../Logo/Logo";
import NavBarItem from "../NavBarItem/NavBarItem";
import "./NavBar.scss";
import { ReactComponent as CogIcon } from "../../assets/cog-icon.svg";
import { ReactComponent as ArticleIcon } from "../../assets/article-book-icon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard-windows-square.svg";
import { ReactComponent as PathwaysIcon } from "../../assets/pathways-chain-icon.svg";
import { ReactComponent as MarketplaceIcon } from "../../assets/marketplace-shopping-trolley-icon.svg";
import { ReactComponent as UsersIcon } from "../../assets/users-people-icon.svg";

const NavBar = ({ selected, getCurrentPage }) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__container">
        <div className="nav-bar__logo">
          <Logo getCurrentPage={getCurrentPage} />
        </div>

        <ul className="nav-bar__link-list">
          <NavBarItem
            text="Dashboard"
            selected={selected}
            getCurrentPage={getCurrentPage}
            link="/"
          >
            <DashboardIcon />
          </NavBarItem>
          <NavBarItem
            text="Pathways"
            selected={selected}
            getCurrentPage={getCurrentPage}
            link="/pathways"
          >
            <PathwaysIcon />
          </NavBarItem>
          <NavBarItem
            text="Articles"
            selected={selected}
            getCurrentPage={getCurrentPage}
            link="/articles"
          >
            <ArticleIcon />
          </NavBarItem>
          <NavBarItem
            text="Marketplace"
            selected={selected}
            getCurrentPage={getCurrentPage}
            link="/marketplace"
          >
            <MarketplaceIcon />
          </NavBarItem>
          <NavBarItem
            text="Users"
            selected={selected}
            getCurrentPage={getCurrentPage}
            link="/users"
          >
            <UsersIcon />
          </NavBarItem>
        </ul>

        <NavBarItem
          text="Settings"
          selected={selected}
          getCurrentPage={getCurrentPage}
          link="/settings"
        >
          <CogIcon />
        </NavBarItem>
      </div>
    </div>
  );
};

export default NavBar;
