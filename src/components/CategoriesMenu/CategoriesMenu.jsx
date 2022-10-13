import "./CategoriesMenu.scss";
import arrow from "../../assets/going-up-graph-arrow-grey.svg";
import trophy from "../../assets/trophy-icon-grey.svg";

const CategoriesMenu = ({ links, condition }) => {
  typeof links === "string" ? (links = [links]) : links;

  // Set condition to true if rendering in marketplace

  let linksArr = links.map((link, index) => {
    if (index % 2 == 0) {
      if (condition) {
        return (
          <li key={index} className="categories-menu__item--marketplace">
            <img
              className="categories-menu__item--icons"
              src={arrow}
              alt="Icon"
            />
            {link}
          </li>
        );
      } else {
        return (
          <li
            key={index}
            className="categories-menu__item categories-menu__item--purple"
          >
            {link}
          </li>
        );
      }
    } else {
      if (condition) {
        return (
          <li key={index} className="categories-menu__item--marketplace">
            <img
              className="categories-menu__item--icons"
              src={trophy}
              alt="Icon"
            />
            {link}
          </li>
        );
      } else {
        return (
          <li
            key={index}
            className="categories-menu__item categories-menu__item--darkpurple"
          >
            {link}
          </li>
        );
      }
    }
  });

  return <ul className="categories-menu">{linksArr}</ul>;
};

export default CategoriesMenu;
