import "./Searchbar.scss";

import magnifyGlass from "../../assets/magnifying-glass-grey.svg";

const Searchbar = ({ searchWord, handleSearchInput }) => {
  
  return (
    <div className="search-bar">
      {/* magnifying glass icon to the left of input */}
      <img src={magnifyGlass} alt="Search Icon" className="search-bar__image"/>
      <input type="text" placeholder="Search this here..." value={searchWord} onChange={handleSearchInput} className="search-bar__input" data-testid="search-input"/>
      {/* input containing a placeholder that says Search for articles... */}
      {/* create an onChange that is non functional that takes in the function as a prop */}
    </div>
  );
};

export default Searchbar;
