import "./DeletePrompt.scss"
import warning from "../../assets/exclamation-mark-icon.svg"

const DeletePrompt = ({title}) => {
  return (
    <div className="delete-prompt">
        <img src={warning} alt="Warning Image" className="delete-prompt__image"/>
        <h2 className="delete-prompt__title">Delete {title}</h2>
        <p className="delete-prompt__content">Are you sure you want to delete this {title}? This action cannot be undone.</p>
        <button>Cancel</button><button>Delete</button>
    </div>
  )
}

export default DeletePrompt