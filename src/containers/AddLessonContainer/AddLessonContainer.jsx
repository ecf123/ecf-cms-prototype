import React from "react";
import "./AddLessonContainer.scss";
import Short from "../../components/Short/Short";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import Button from "../../components/Button/Button";

const AddLessonContainer = ({ handleShortValue, storeInputs}) => {
  return (
    <div className="add-lesson__container">
      <Short
        shortLabelText="Lesson Name"
        shortType="text"
        //   shortPlaceHolderText,
        handleShortValue={handleShortValue}
        inputClassName="short__input"
        name="lesson name"
      />
      <SelectComponent className="add-lesson__select" />
      <Short
        shortLabelText="Lesson Name"
        shortType="text"
        //   shortPlaceHolderText,
        handleShortValue={handleShortValue}
        inputClassName="short__input"
        name="lesson name"
      />

        <h5 className='add-lesson__add'>Add +</h5>

      <div className="add-lesson__buttons">
      <div className="add-lesson__submit">
          <Button
            style={"button light-grey round-border large"}
            textStyle={"text large-text light-grey"}
            buttonText={"Cancel"}
          />
        </div>
        <div className="add-lesson__cancel">
          <Button
            style={"button black round-border large"}
            textStyle={"text large-text black"}
            buttonText={"Submit"}
            buttonFunction={storeInputs}
          />
        </div>
      </div>
    </div>
  );
};

export default AddLessonContainer;
