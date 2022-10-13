import "./DeletePrompt.scss";
import warning from "../../assets/exclamation-mark-icon.svg";
import Button from "../Button/Button";

const DeletePrompt = ({ title, handleCancel, handleDelete }) => {
  {
    /*This is the component for the delete prompt box, it will need props for the handling of each click
    as well as a prop for the title of what is being deleted.*/
  }
  return (
    <div className="delete-prompt">
      <div className="delete-prompt__image-conatiner">
        <img
          src={warning}
          alt="Warning Image"
          className="delete-prompt__image"
        />
      </div>
      <h2 className="delete-prompt__title">Delete {title}</h2>
      <p className="delete-prompt__content">
        Are you sure you want to delete this {title}? This action cannot be
        undone.
      </p>
      <div className="delete-prompt__button-holder">
        <Button
          style={"button white rounded-square-border border modal"}
          textStyle={"text modal-text white"}
          buttonText={"Cancel"}
          onClick={handleCancel}
        />
        <Button
          style={"button red rounded-square-border modal"}
          textStyle={"text modal-text red"}
          buttonText={"Delete"}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default DeletePrompt;
