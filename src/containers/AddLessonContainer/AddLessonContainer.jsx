import "./AddLessonContainer.scss";
import { useState } from "react";
import Short from "../../components/Short/Short";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import Button from "../../components/Button/Button";
import MediaUploadBox from "../../components/MediaUploadBox/MediaUploadBox"
import AddLessonAdditionalBoxes from "../../components/AddLessonAdditionalBoxes/AddLessonAdditionalBoxes";

const AddLessonContainer = ({ handleShortValue, handleSubmit, handleCancel}) => {
  
  const [pageInfo, setPageInfo] = useState({
    file: null,
    fileName: "",
    shortInputOne: "",
    shortInputTwo: "",
    freeTypeInputOne: "",
    freeTypeInputTwo: "",
  });  
  
  const handleFileChange = (e) => {
    if (!pageInfo.file) setPageInfo({ fileName: e.target.files[0].name });
    pageInfo.file
      ? setPageInfo({ ...pageInfo, file: null })
      : setPageInfo({
          ...pageInfo,
          file: URL.createObjectURL(e.target.files[0]),
        });
  };

  return (
    <div className="add-lesson">
      <div className="add-lesson__container">
        <Short
          shortLabelText="Lesson Name"
          shortType="text"
          // No placeholder needed
          handleShortValue={handleShortValue}
          inputClassName="short__input"
          name="lesson name"
        />
        <SelectComponent className="add-lesson__select" />
        <Short
          shortLabelText="Estimated Completion Time"
          shortType="text"
          // No placeholder needed
          handleShortValue={handleShortValue}
          inputClassName="short__input"
          name="estimated completion time"
        />
        <div>
        <AddLessonAdditionalBoxes />
        </div>
        
        


          <h5 className='add-lesson__add'>Add +</h5>


        <div className="add-lesson__buttons">
            <Button
              style={"button light-grey round-border large"}
              textStyle={"text large-text light-grey"}
              buttonText={"Cancel"}
              buttonFunction={handleCancel}
            />
            <Button
              style={"button black round-border large"}
              textStyle={"text large-text black"}
              buttonText={"Submit"}
              buttonFunction={handleSubmit}
            />
        </div>
      </div>
      <div className="add-lesson__upload">
        <MediaUploadBox 
          file={pageInfo.file}
          handleFileChange={handleFileChange}
          uploadLabelName = "Lesson Upload"
          uploadButtonText = "Media Upload"
          fileName={pageInfo.fileName}
          />
      </div>
      <div className="add-lesson__content">
      </div>
    </div>
  );
};

export default AddLessonContainer;
