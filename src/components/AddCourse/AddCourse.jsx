import "./AddCourse.scss";
import Short from "../../components/Short/Short";
import FreeType from "../../components/FreeType/FreeType";
import Button from "../../components/Button/Button";
import MediaUploadBox from "../../components/MediaUploadBox/MediaUploadBox";

const AddCourse = ({
  shortLabelTextOne,
  shortLabelTextTwo,
  shortLabelTextThree,
  shortPlaceHolderTextTwo,
  shortPlaceHolderTextThree,
  freeTypeLabelTextOne,
  uploadLabelNameTwo,
  uploadLabelName,
  propsObject  
}) => {

  return (
    <div className="add-course">
      <div className="add-course__input-texts">
        <Short
          shortLabelText={shortLabelTextOne}
          shortType="text"
          name="shortInputOne"
          inputClassName={{...propsObject}.classNameInput}
          handleShortValue={{...propsObject}.handleChange}
        />
        <FreeType
          freeTypeLabelText={freeTypeLabelTextOne}
          name="freeTypeInputOne"
          inputClassName={{...propsObject}.classNameInputThree}
          handleFreeTypeValue={{...propsObject}.handleChange}
        />
        <Short
          shortLabelText={shortLabelTextTwo}
          shortType="text"
          shortPlaceHolderText={shortPlaceHolderTextTwo}
          name="shortInputTwo"
          inputClassName={{...propsObject}.classNameInputTwo}
          handleShortValue={{...propsObject}.handleChange}
        />
        <Short
          shortLabelText={shortLabelTextThree}
          shortType="text"
          shortPlaceHolderText={shortPlaceHolderTextThree}
          name="shortInputTwo"
          inputClassName={{...propsObject}.classNameInputTwo}
          handleShortValue={{...propsObject}.handleChange}
        />

        <p className="add-course__error-message">{{...propsObject}.errorMessage}</p>

        <div className="add-course__buttons">
          <div className="add-course__cancel">
            <Button
              style={"button light-grey round-border large"}
              textStyle={"text large-text light-grey"}
              buttonText={"Cancel"}
            />
          </div>
          <div className="add-course__submit">
            <Button
              style={"button black round-border large"}
              textStyle={"text large-text black"}
              buttonText={"Submit"}
              buttonFunction={{...propsObject}.storeInputs}
            />
          </div>
        </div>
      </div>
      <div className="add-course__uploadContainer">
        <div className="add-course__media-upload">
          <MediaUploadBox
            file={{...propsObject}.file}
            handleFileChange={{...propsObject}.handleFileChange}
            uploadLabelName={uploadLabelName}
            uploadButtonText="Upload Image"
            fileName={{...propsObject}.fileName}
            newId={"file1"}
          />
        </div>
        <div className="add-course__media-upload2">
          <MediaUploadBox
            file={{...propsObject}.fileTwo}
            handleFileChange={{...propsObject}.handleFileChange2}
            uploadLabelName={uploadLabelNameTwo}
            uploadButtonText="Upload Image"
            fileName={{...propsObject}.fileNameTwo}
            newId={"file2"}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
