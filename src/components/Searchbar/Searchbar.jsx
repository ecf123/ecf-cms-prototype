import "./SearchBar.scss";

import magnifyGlass from "../../assets/magnifying-glass-grey.svg";

const SearchBar = ({placeholderText, searchWord, handleSearchInput }) => {
  
  return (
    <div className="search-bar">
<<<<<<< HEAD
      {/*Props being used to change the placeholder text, as well as store search word and handle the logic of the search bar.*/}
=======
      {/*Props being used to change the placeholder text, as well as store search word and handle the logic of the search bar for updates*/}
>>>>>>> f4eab73fb43d9b1a965950d6b5901c1c722ef0aa
      <img src={magnifyGlass} alt="Search Icon" className="search-bar__image"/>
      <input type="text" placeholder={placeholderText} value={searchWord} onChange={handleSearchInput} className="search-bar__input" data-testid="search-input"/>
    </div>
  );
};

export default SearchBar;
