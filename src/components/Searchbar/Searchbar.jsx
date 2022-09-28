import "./Searchbar.scss";

import magnifyGlass from "../../assets/magnifying-glass-grey.svg";

const Searchbar = ({ placeholderText, searchWord, handleSearchInput }) => {
  return (
    <div className="search-bar">
      {/* magnifying glass icon to the left of input */}
      <img src={magnifyGlass} alt="Search Icon" className="search-bar__image"/>
      <form className="search-bar__form">
        <input type="text" placeholder={placeholderText} value={searchWord} onChange={handleSearchInput} className="search-bar__input" />
      </form>
      {/* input containing a placeholder that says Search for articles... */}
      {/* create an onChange that is non functional that takes in the function as a prop */}
    </div>
  );
};

export default Searchbar;
