import "./MoreOptions.scss";
import Button from "../Button/Button";
import { ReactComponent as Bin } from "../../assets/bin-icon.svg";
import { ReactComponent as Pencil } from "../../assets/pen-icon.svg";

const MoreOptions = ({ title, description, handleDelete, handleEdit }) => {
  return (
    <div className="more-options">
      <h3 className="more-options__title">{title} Options</h3>
      <p className="more-options__description">{description}</p>
      <div className="more-options__buttons">
        <Button
          onClick={handleEdit}
          style={"button light-grey round-border medium"}
          imgStyle={"medium-img black-svg"}
          textStyle={"text medium-text light-grey"}
          buttonText={"Edit"}
        >
          <Pencil />
        </Button>
        <Button
          onClick={handleDelete}
          style={"button red round-border medium"}
          imgStyle={"medium-img white-svg"}
          textStyle={"text medium-text red"}
          buttonText={"Delete"}
        >
          <Bin />
        </Button>
      </div>
    </div>
  );
};

export default MoreOptions;
