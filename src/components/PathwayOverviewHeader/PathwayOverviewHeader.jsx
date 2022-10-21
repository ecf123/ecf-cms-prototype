import "./PathwayOverviewHeader.scss";
import Button from "../Button/Button";
import { ReactComponent as Pencil } from "../../assets/pen-icon.svg";
import { Link } from "react-router-dom";
const PathwayOverviewHeader = ({ link }) => {
  return (
    <div className="pathway-header">
      <h2 className="pathway-header__title">Pathway Structure</h2>
      <Link className="pathway-header__link" to={link}>
        <Button
          style={"button black round-border medium"}
          imgStyle={"medium-img white-svg"}
          textStyle={"text medium-text black"}
          buttonText={"Add Course"}
        >
          <Pencil />
        </Button>
      </Link>
    </div>
  );
};

export default PathwayOverviewHeader;
