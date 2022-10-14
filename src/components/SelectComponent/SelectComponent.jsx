import topicArrow from "../../assets/upside-down-arrow-grey.svg";
import "./SelectComponent.scss";

const SelectComponent = () => {

  return (
    <>
    <label className="select__label" htmlFor="">Lesson Type</label>
    <div className='select'>
        
        <select className='select__dropdown' name="" id=""  img={topicArrow}>
            <option className="select__dropdownoption" value="">Lesson</option>
            <option className="select__dropdownoption" value="">Assessment Quiz</option>
        </select>
    </div>
    </>
  )
}

export default SelectComponent