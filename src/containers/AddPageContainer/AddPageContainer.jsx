import "./AddPage.scss";
import { useState } from "react";
import AddPage from "../../components/AddPage/AddPage";

const AddPathway = () => {
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

  const file= pageInfo.file
  const fileName= pageInfo.fileName

  const classNameInput =
    (pageInfo.freeTypeInputOne != "" &&
    !freeTypeLabelTextOne.includes("optional") &&
    !pageFirstOpened) ||
    (pageFirstOpened && !freeTypeLabelTextOne.includes("optional")) ||
    freeTypeLabelTextOne.includes("optional")
    ? "free-type__input"
    : "free-type__input--empty";


  const classNameInputTwo = 
    (pageInfo.shortInputTwo != "" &&
    !shortLabelTextTwo.includes("optional") &&
    !pageFirstOpened) ||
    (pageFirstOpened && !shortLabelTextTwo.includes("optional")) ||
    shortLabelTextTwo.includes("optional")
    ? "short__input"
    : "short__input--empty"

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
      (pageInfo.shortInputOne == "" &&
        !shortLabelTextOne.includes("optional")) ||
      (pageInfo.freeTypeInputOne == "" &&
        !freeTypeLabelTextOne.includes("optional")) ||
      (pageInfo.shortInputTwo == "" &&
        !shortLabelTextTwo.includes("optional")) ||
      (pageInfo.freeTypeInputTwo == "" &&
        !freeTypeLabelTextTwo.includes("optional"))
    ) {
      setErrorMessage("Please enter the info needed in the empty red boxes");
    } else {
      setErrorMessage("");
    }
  };

  const propsObject = {
    uploadLabelName: uploadLabelName,
    handleFileChange: handleFileChange,
    handleChange: handleChange,
    storeInputs: storeInputs,
    errorMessage: errorMessage,
    classNameInput: classNameInput,
    classNameInputTwo: classNameInputTwo,
    file: file,
    fileName: fileName
  } 


  return (
    <div className="add-pathway">
      <AddPage shortLabelTextOne={"Pathway Name"} shortLabelTextTwo={"Pathway Category(s)"} shortPlaceHolderTextOne={""} shortPlaceHolderTextTwo={"Business"} freeTypeLabelTextOne={"Pathway Overview"} freeTypeLabelTextTwo={"Pathway Career Discription"} propsObject={propsObject}/>
    </div>
  );
};

export default AddPathway;
