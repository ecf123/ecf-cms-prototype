import "./AddLessonContainer.scss";
import { useState } from "react";
import Short from "../../components/Short/Short";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import Button from "../../components/Button/Button";
import MediaUploadBox from "../../components/MediaUploadBox/MediaUploadBox";
import AddLessonAdditionalBoxes from "../../components/AddLessonAdditionalBoxes/AddLessonAdditionalBoxes";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer";
import QuestionContainer from "../../containers/QuestionContainer/QuestionContainer";
import LessonContentPreview from "../../components/LessonContentPreview/LessonContentPreview";

const AddLessonContainer = ({
  handleSubmit,
  handleCancel,
}) => {
  const [inputs, setInputs] = useState("Lesson");
  const [data, setData] = useState([])
  const [additionalInfo, setAdditionalInfo] = useState({title: "", content: ""})
  const [question] = useState({question: "", answers: []})
  
  const onChange = (event) => {
    if (event.target.value === "Lesson") {
      setInputs("Lesson");
    } else if (event.target.value === "Assessment Quiz") {
      setInputs("Assessment Quiz");
    }
  };

  const [pageInfo, setPageInfo] = useState({
    file: null,
    fileName: "",
    shortInputOne: "",
    shortInputTwo: "",
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

  const addData = () => {
    setData([...data, additionalInfo])
  };

  const handleDelete = (e) => {
    setData(data.filter(object => object.content != e.target.parentElement.parentElement.children[1].firstChild.data))
  }
  let array = [];
  const addAnswers = (e) => {
    array.push(e.target.parentElement.children[4][1].value)
    array.push(e.target.parentElement.children[4][3].value)
    array.push(e.target.parentElement.children[4][5].value)
    array.push(e.target.parentElement.children[4][7].value)
    setData([...data, {...question, question: e.target.parentElement.children[4][0].value, answers: array }])

  }


  


  return (
    <div className="lesson">
      <div className="lesson__container">
        <button onClick={()=> {
          console.log(question)
        }}
        >Info</button>
        <Short
          shortLabelText="Lesson Name"
          shortType="text"
          // No placeholder needed
          handleShortValue={(e) => setPageInfo({...pageInfo, shortInputOne: e.target.value})}
          inputClassName="short__input"
          name="lesson name"

        />
        <SelectComponent className="lesson__select" onChange={onChange} />
        <Short
          shortLabelText="Estimated Completion Time"
          shortType="text"
          // No placeholder needed
          handleShortValue={(e) => setPageInfo({...pageInfo, shortInputTwo: e.target.value})}
          inputClassName="short__input"
          name="estimated completion time"
        />
        {inputs == "Lesson" ? (
          <AddLessonAdditionalBoxes
            handleFreeTypeValue={(e) => {
              setAdditionalInfo({...additionalInfo, content: e.target.value})
            }}
            handleShortValue={(e) => setAdditionalInfo({...additionalInfo, title: e.target.value})}
          />
        ) : (
          <QuestionAnswer
            // handleShortValue={(e) => setQuestion({...question, title: e.target.value})}
            onSubmit={addAnswers}
            // handleCheckboxValue={(e)=> {
              // array.push(e.target.value);
              // console.log(array);
            // }}
            // handleClickCheckbox={handleClickCheckbox}
          />
        )}
        ;
        <h5 className="lesson__add" onClick={inputs == "Lesson" ? addData : addAnswers}>
          Add +
        </h5>
        <div className="lesson__buttons">
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
          uploadLabelName="Lesson Upload"
          uploadButtonText="Media Upload"
          fileName={pageInfo.fileName}
        />
      </div>
      <div className="lesson__content">
        {inputs == "Lesson" ? (
          <LessonContentPreview
            lessonsArray={data}
            handleDelete={handleDelete}
          />
        ) : (
          <QuestionContainer
            questionsArray={data}
            // handleDelete={handleDelete}
          />
        )}
        ;
      </div>
    </div>
  );
};

export default AddLessonContainer;