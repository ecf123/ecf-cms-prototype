import './AddPage.scss'
import Short from "../../components/Short/Short";
import FreeType from "../../components/FreeType/FreeType";
import Button from "../../components/Button/Button";
import MediaUploadBox from "../../components/MediaUploadBox/MediaUploadBox";

const AddPage = ({
  propsObject,
  shortLabelTextOne,
  shortLabelTextTwo,
  shortPlaceHolderTextOne,
  shortPlaceHolderTextTwo,
  freeTypeLabelTextOne,
  freeTypeLabelTextTwo,
}) => {
  return (
    <div>
        <div className="add-pathway__input-texts">
        <Short
          shortLabelText={shortLabelTextOne}
          shortPlaceHolderText={shortPlaceHolderTextOne}
          shortType="text"
          name="shortInputOne"
          inputClassName={{...propsObject}.classNameInputTwo}
          handleShortValue={{...propsObject}.handleChange}
        />
        <FreeType
          freeTypeLabelText={freeTypeLabelTextOne}
          name="freeTypeInputOne"
          inputClassName={{...propsObject}.classNameInput}
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
        <FreeType
          freeTypeLabelText={freeTypeLabelTextTwo}
          name="freeTypeInputTwo"
          inputClassName={{...propsObject}.classNameInput}
          handleFreeTypeValue={{...propsObject}.handleChange}
        />

        <p className="add-pathway__error-message">{{...propsObject}.errorMessage}</p>

        <div className="add-pathway__buttons">
          <div className="add-pathway__cancel">
            <Button
              style={"button black round-border large"}
              textStyle={"text large-text black"}
              buttonText={"Submit"}
              buttonFunction={{...propsObject}.storeInputs}
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
          file={{...propsObject}.file}
          handleFileChange={{...propsObject}.handleFileChange}
          uploadLabelName={{...propsObject}.uploadLabelName}
          uploadButtonText="Upload Image"
          fileName={{...propsObject}.fileName}
        />
      </div>
    </div>
  )
}

export default AddPage

