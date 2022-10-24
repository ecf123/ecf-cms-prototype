import './AddPage.scss'
import Short from "../../components/Short/Short";
import FreeType from "../../components/FreeType/FreeType";
import Button from "../../components/Button/Button";
import MediaUploadBox from "../../components/MediaUploadBox/MediaUploadBox";

const AddPage = ({
    shortLabelTextOne,
    shortLabelTextTwo,
    shortPlaceHolderTextOne,
    shortPlaceHolderTextTwo,
    freeTypeLabelTextOne,
    freeTypeLabelTextTwo,
    uploadLabelName,
    handleFileChange,
    handleChange,
    storeInputs,
    errorMessage,
    classNameInput,
    classNameInputTwo,
    classNameInputThree,
    file,
    fileName
}) => {
  return (
    <div>
        <div className="add-pathway__input-texts">
        <Short
          shortLabelText={shortLabelTextOne}
          shortPlaceHolderText={shortPlaceHolderTextOne}
          shortType="text"
          name="shortInputOne"
          inputClassName={
            (pageInfo.shortInputOne != "" &&
              !shortLabelTextOne.includes("optional") &&
              !pageFirstOpened) ||
            (pageFirstOpened && !shortLabelTextOne.includes("optional")) ||
            shortLabelTextOne.includes("optional")
              ? "short__input"
              : "short__input--empty"
          }
          handleShortValue={handleChange}
        />
        <FreeType
          freeTypeLabelText={freeTypeLabelTextOne}
          name="freeTypeInputOne"
          inputClassName={
            (pageInfo.freeTypeInputOne != "" &&
              !freeTypeLabelTextOne.includes("optional") &&
              !pageFirstOpened) ||
            (pageFirstOpened && !freeTypeLabelTextOne.includes("optional")) ||
            freeTypeLabelTextOne.includes("optional")
              ? "free-type__input"
              : "free-type__input--empty"
          }
          handleFreeTypeValue={handleChange}
        />
        <Short
          shortLabelText={shortLabelTextTwo}
          shortType="text"
          shortPlaceHolderText={shortPlaceHolderTextTwo}
          name="shortInputTwo"
          inputClassName={
            (pageInfo.shortInputTwo != "" &&
              !shortLabelTextTwo.includes("optional") &&
              !pageFirstOpened) ||
            (pageFirstOpened && !shortLabelTextTwo.includes("optional")) ||
            shortLabelTextTwo.includes("optional")
              ? "short__input"
              : "short__input--empty"
          }
          handleShortValue={handleChange}
        />
        <FreeType
          freeTypeLabelText={freeTypeLabelTextTwo}
          name="freeTypeInputTwo"
          inputClassName={
            (pageInfo.freeTypeInputTwo != "" &&
              !freeTypeLabelTextTwo.includes("optional") &&
              !pageFirstOpened) ||
            (pageFirstOpened && !freeTypeLabelTextTwo.includes("optional")) ||
            freeTypeLabelTextTwo.includes("optional")
              ? "free-type__input"
              : "free-type__input--empty"
          }
          handleFreeTypeValue={handleChange}
        />

        <p className="add-pathway__error-message">{errorMessage}</p>

        <div className="add-pathway__buttons">
          <div className="add-pathway__cancel">
            <Button
              style={"button black round-border large"}
              textStyle={"text large-text black"}
              buttonText={"Submit"}
              buttonFunction={storeInputs}
            />
          </div>
          <div className="add-pathway__submit">
            <Button
              style={"button light-grey round-border large"}
              textStyle={"text large-text light-grey"}
              buttonText={"Cancel"}
            />
          </div>
        </div>
      </div>

      <div className="add-pathway__media-upload">
        <MediaUploadBox
          file={pageInfo.file}
          handleFileChange={handleFileChange}
          uploadLabelName={uploadLabelName}
          uploadButtonText="Upload Image"
          fileName={pageInfo.fileName}
        />
      </div>
    </div>
  )
}

export default AddPage

