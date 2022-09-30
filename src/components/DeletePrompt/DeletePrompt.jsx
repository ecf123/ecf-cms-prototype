import "./DeletePrompt.scss"
import warning from "../../assets/exclamation-mark-icon.svg"

const DeletePrompt = ({title}) => {
  return (
    <div className="delete-prompt">
      <div className="delete-prompt__image-conatiner">
      <img src={warning} alt="Warning Image" className="delete-prompt__image"/>
      </div>
        <h2 className="delete-prompt__title">Delete {title}</h2>
        <p className="delete-prompt__content">Are you sure you want to delete this {title}? This action cannot be undone.</p>
        <div className="delete-prompt__button-holder">
          <button>Cancel</button><button>Delete</button>
        </div>
    </div>
  )
}

export default DeletePrompt