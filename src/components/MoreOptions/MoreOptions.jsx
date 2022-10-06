import "./MoreOptions.scss";
import Button from "../Button/Button";
import { ReactComponent as Bin } from "../../assets/bin-icon.svg";
import { ReactComponent as Pencil } from "../../assets/pen-icon.svg";


const MoreOptions = (props) => {
  const { title, description, handleDelete, handleEdit } = props;
  return (
    <div className="more-options">
      <h3 className="more-options__title">{title} Options</h3>
      <p className="more-options__description">{description}</p>
      <div className="more-options__buttons">
        <Button
          onClick={handleEdit}
          style={"button grey round-border small more-options__button"}
          imgStyle={"small-img black-svg"}
          textStyle={"text small-text grey"}
          buttonText={"Edit"}
        >
          <Pencil />
        </Button>
        <Button
          onClick={handleDelete}
          style={"button red round-border small more-options__button"}
          imgStyle={"small-img white-svg"}
          textStyle={"text small-text red"}
          buttonText={"Delete"}   
        >
          <Bin />
        </Button>
      </div>
    </div>
  );
};

export default MoreOptions;
