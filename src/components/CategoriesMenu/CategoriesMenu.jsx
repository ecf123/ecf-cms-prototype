import React from "react";
import "./CategoriesMenu.scss";

const CategoriesMenu = ({ links, condition }) => {
  typeof links === "string" ? (links = [links]) : links;

  let linksArr;

  if(condition) {
    linksArr = links?.map((link, index) => {
        if (index % 2 == 0) {
          return (
            <li
              key={index}
              className="categories-menu__item categories-menu__item--purple"
            >
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
        });
  } else {
    linksArr =  (
        <li key={index} className=""></li>
    );
 
  }
    
    
    

    return ( <ul className="categories-menu">{links}</ul>)
}

export default CategoriesMenu;
