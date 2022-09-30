import "./Searchbar.scss";

import magnifyGlass from "../../assets/magnifying-glass-grey.svg";

const Searchbar = ({placeholderText, searchWord, handleSearchInput }) => {
  
  return (
    <div className="search-bar">
      //Props being used to change the placeholder text, as well as store search word and handle the logic of the search bar. 
      <img src={magnifyGlass} alt="Search Icon" className="search-bar__image"/>
      <input type="text" placeholder={placeholderText} value={searchWord} onChange={handleSearchInput} className="search-bar__input" data-testid="search-input"/>
    </div>
  );
};

export default Searchbar;
