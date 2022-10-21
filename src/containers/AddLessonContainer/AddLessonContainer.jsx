import React from "react";
import "./AddLessonContainer.scss";
import Short from "../../components/Short/Short";
import SelectComponent from "../../components/SelectComponent/SelectComponent";

const AddLessonContainer = ({ handleShortValue }) => {
  return (
    <div>
      <Short
        shortLabelText="Lesson Name"
        shortType="text"
        //   shortPlaceHolderText,
        handleShortValue={handleShortValue}
        inputClassName="short__input"
        name="lesson name"
        />
        <SelectComponent />
        <Short
        shortLabelText="Lesson Name"
        shortType="text"
        //   shortPlaceHolderText,
        handleShortValue={handleShortValue}
        inputClassName="short__input"
        name="lesson name" />
    </div>
  );
};

export default AddLessonContainer;
