import React from 'react'
import './CategoriesMenu.scss'

const CategoriesMenu = ({links}) => {

    typeof links === "string" ? (links = [links]) : links;
      
    const linksArr = links?.map((link, index) => {
        (true ?? ) : ()
        if (index % 2 == 0) {
        return (
            <li key={index} className="categories-menu__item categories-menu__item--purple">{link}</li>);
            } else {
            return (
              <li key={index} className="categories-menu__item categories-menu__item--darkpurple">{link}</li>
            );
        }
    });

    return (
        <ul className="categories-menu">{linksArr}</ul>
    )
}

export default CategoriesMenu