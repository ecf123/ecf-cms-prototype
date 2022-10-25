import "./AddCourseContainer.scss";
import { useState } from "react";
import AddCourse from "../../components/AddCourse/AddCourse";

const AddCourseContainer = () => {
  const [pageInfo, setPageInfo] = useState({
    file: null,
    fileName: "",
    fileTwo: null,
    fileTwoName: "",
    shortInputOne: "",
    shortInputTwo: "",
    freeTypeInputOne: "",
    freeTypeInputTwo: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [pageFirstOpened, setPageFirstOpened] = useState(true);

  const handleFileChange = (e) => {
    console.log(pageInfo)
      if (!pageInfo.file) setPageInfo({ fileName: e.target.files[0].name });
      pageInfo.file
        ? setPageInfo({ ...pageInfo, file: null })
        : setPageInfo({
            ...pageInfo,
            file: URL.createObjectURL(e.target.files[0]),
          });
    }

  const handleFileChange2 = (e) => {
    console.log(pageInfo)
    if (!pageInfo.fileTwo) setPageInfo({ fileTwoName: e.target.files[0].name });
      pageInfo.fileTwo
        ? setPageInfo({ ...pageInfo, fileTwo: null })
        : setPageInfo({
            ...pageInfo,
            fileTwo: URL.createObjectURL(e.target.files[0]),
          });
  }

  const handleChange = (e) => {
    console.log(e.target.name);
    setPageInfo({ ...pageInfo, [e.target.name]: e.target.value });
  };

  const storeInputs = (event) => {
    setPageFirstOpened(false);
    event.preventDefault();
    if (pageInfo.shortInputOne == "" || pageInfo.freeTypeInputOne == "" || pageInfo.shortInputTwo == "") {
      setErrorMessage("Please enter the info needed in the empty red boxes");
    } else {
      setErrorMessage("");
    }
  };

  
  const classNameInputTwo = (pageInfo.shortInputTwo != "" && !pageFirstOpened) ||
  (pageFirstOpened) 
  ? "short__input"
  : "short__input--empty"
  
  
  const classNameInput = (pageInfo.shortInputOne != "" && !pageFirstOpened) ||
  (pageFirstOpened) 
  ? "short__input"
  : "short__input--empty"
  
  const classNameInputThree = (pageInfo.freeTypeInputOne != ""  && !pageFirstOpened) ||
  (pageFirstOpened)
    ? "free-type__input"
    : "free-type__input--empty"

  const file= pageInfo.file

  const fileName= pageInfo.fileName

  const fileTwo = pageInfo.fileTwo

  const fileNameTwo = pageInfo.fileName

  const propsObject = {
    handleChange: handleChange,
    handleFileChange: handleFileChange,
    handleFileChange2: handleFileChange2,
    storeInputs: storeInputs,
    errorMessage: errorMessage,
    file: file,
    fileName: fileName,
    fileTwo: fileTwo,
    fileNameTwo: fileNameTwo,
    classNameInput: classNameInput,
    classNameInputTwo: classNameInputTwo,
    classNameInputThree: classNameInputThree,
  }
  
  return (
    <div className="add-course">
      <AddCourse
        shortLabelTextOne={"Course Name"}
        freeTypeLabelTextOne={"Course Overview"}
        shortLabelTextTwo={"Course Provider"}
        shortPlaceHolderTextTwo={"E.G Barclays..."}
        shortLabelTextThree={"Course Mentor"}
        shortPlaceHolderTextThree={"E.G Barclays"}
        uploadLabelName={"Course Thumbnail"}
        uploadLabelNameTwo={"Provider Logo"}
        propsObject={propsObject}
/>
    </div>
  );
};

export default AddCourseContainer;