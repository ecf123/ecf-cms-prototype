import "./SelectComponent.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";

const SelectComponent = ({topicTitle, selectArr}) => {
    const selectList = selectArr.map((select, index) => {
    return (
      <li key={index}>
        <a href="#">
          <p className="drop-down__content">{select.title}</p>
        </a>
      </li>
    );
  });
  return (
    <nav className="drop-down">
      <input type="checkbox" id={topicTitle} />
      <label htmlFor={topicTitle}>
        <span className="drop-down__title">
          {topicTitle}
          <img
            src={topicArrow}
            alt="Topic Arrow"
            className="drop-down__arrow"
          />
        </span>
      </label>

      <ul className="drop-down__list">{selectList}</ul>
    </nav>
  );
  }

export default SelectComponent