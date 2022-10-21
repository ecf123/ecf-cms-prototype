import "./AddCourse.scss";
import { useState } from "react";
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
  uploadLabelName,
  uploadLabelNameTwo,
}) => {
  const [pageInfo, setPageInfo] = useState({
    file: null,
    fileName: "",
    shortInputOne: "",
    shortInputTwo: "",
    freeTypeInputOne: "",
    freeTypeInputTwo: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [pageFirstOpened, setPageFirstOpened] = useState(true);

  const handleFileChange = (e) => {
    if (!pageInfo.file) setPageInfo({ fileName: e.target.files[0].name });
    pageInfo.file
      ? setPageInfo({ ...pageInfo, file: null })
      : setPageInfo({
          ...pageInfo,
          file: URL.createObjectURL(e.target.files[0]),
        });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setPageInfo({ ...pageInfo, [e.target.name]: e.target.value });
  };

  const storeInputs = (event) => {
    setPageFirstOpened(false);
    event.preventDefault();
    if (
      (pageInfo.shortInputOne == "" && !shortLabelTextOne.includes("optional")) ||
      (pageInfo.freeTypeInputOne == "" && !freeTypeLabelTextOne.includes("optional")) ||
      (pageInfo.shortInputTwo == "" && !shortLabelTextTwo.includes("optional"))
    ) {
      setErrorMessage("Please enter the info needed in the empty red boxes");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <div className="add-course">
      <div className="add-course__input-texts">
        <Short
          shortLabelText={shortLabelTextOne}
          shortType="text"
          name="shortInputOne"
          inputClassName={
            (pageInfo.shortInputOne != "" && !shortLabelTextOne.includes("optional") && !pageFirstOpened) ||
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
            (pageInfo.freeTypeInputOne != "" && !freeTypeLabelTextOne.includes("optional") && !pageFirstOpened) ||
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
            (pageInfo.shortInputTwo != "" && !shortLabelTextTwo.includes("optional") && !pageFirstOpened) ||
            (pageFirstOpened && !shortLabelTextTwo.includes("optional")) ||
            shortLabelTextTwo.includes("optional")
              ? "short__input"
              : "short__input--empty"
          }
          handleShortValue={handleChange}
        />
        <Short
          shortLabelText={shortLabelTextThree}
          shortType="text"
          shortPlaceHolderText={shortPlaceHolderTextThree}
          name="shortInputTwo"
          inputClassName={
            (pageInfo.shortInputTwo != "" && !shortLabelTextTwo.includes("optional") && !pageFirstOpened) ||
            (pageFirstOpened && !shortLabelTextTwo.includes("optional")) ||
            shortLabelTextTwo.includes("optional")
              ? "short__input"
              : "short__input--empty"
          }
          handleShortValue={handleChange}
        />

        <p className="add-course__error-message">{errorMessage}</p>

        <div className="add-course__buttons">
          <div className="add-course__cancel">
            <Button style={"button light-grey round-border large"} textStyle={"text large-text light-grey"} buttonText={"Cancel"} />
          </div>
          <div className="add-course__submit">
            <Button
              style={"button black round-border large"}
              textStyle={"text large-text black"}
              buttonText={"Submit"}
              buttonFunction={storeInputs}
            />
          </div>
        </div>
      </div>
      <div className="add-course__uploadContainer">
        <div className="add-course__media-upload">
          <MediaUploadBox
            file={pageInfo.file}
            handleFileChange={handleFileChange}
            uploadLabelName={uploadLabelName}
            uploadButtonText="Upload Image"
            fileName={pageInfo.fileName}
          />
        </div>
        <div className="add-course__media-upload2">
          <MediaUploadBox
            file={pageInfo.file}
            handleFileChange={handleFileChange}
            uploadLabelName={uploadLabelNameTwo}
            uploadButtonText="Upload Image"
            fileName={pageInfo.fileName}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCourse;