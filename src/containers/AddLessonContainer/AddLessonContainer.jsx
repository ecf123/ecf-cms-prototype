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
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

const AddLessonContainer = () => {
  const [inputs, setInputs] = useState(true);
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const [additionalInfo, setAdditionalInfo] = useState({
    title: "",
    content: "",
  });
  const [question] = useState({ question: "", answers: [] });

  const onChange = (event) => event.target.value === "Lesson" ? setInputs(true) : setInputs(false);

  const [pageInfo, setPageInfo] = useState({
    file: null,
    fileName: "",
    shortInputOne: "",
    shortInputTwo: "",
    questions: [],
    additionalInfos: []
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
    setData([...data, additionalInfo]);
  };

  const handleDelete = (e) => {
    inputs
      ? setData(
          data.filter(
            (object) =>
              object.content !=
              e.target.parentElement.parentElement.children[1].firstChild.data
          )
        )
      : setData(
          data.filter(
            (object) =>
              object.question !=
              e.target.parentElement.parentElement.children[0].firstChild.childNodes[2].data
          )
        );
  };
  let array = [];
  const addAnswers = (e) => {
    array.push(e.target.parentElement.children[3][1].value);
    array.push(e.target.parentElement.children[3][2].value);
    array.push(e.target.parentElement.children[3][3].value);
    array.push(e.target.parentElement.children[3][4].value);
    setData([
      ...data,
      {
        ...question,
        question: e.target.parentElement.children[3][0].value,
        answers: array,
      },
    ]);
  };

  const handleSubmit = () => {
    console.log(pageInfo)
    navigate("/asd") // back to lessons
  }

  const handleCancel = () => {
    navigate("/xczc") // back to lessons
  }

  return (<>
    <div className="lesson__header">
    <PageTitle
      className="lesson__title page-title"
      title="Add Lesson"
    />
  </div>
    <div className="lesson">
      <div className="lesson__container">
        <Short
          shortLabelText="Lesson Name"
          shortType="text"
          handleShortValue={(e) =>
            setPageInfo({ ...pageInfo, shortInputOne: e.target.value })
          }
          inputClassName="short__input"
          name="lesson name"
        />
        <SelectComponent className="lesson__select" onChange={onChange} />
        <Short
          shortLabelText="Estimated Completion Time"
          shortType="text"
          handleShortValue={(e) =>
            setPageInfo({ ...pageInfo, shortInputTwo: e.target.value })
          }
          inputClassName="short__input"
          name="estimated completion time"
        />
        {inputs ? (
          <AddLessonAdditionalBoxes
            handleFreeTypeValue={(e) => {
              setAdditionalInfo({ ...additionalInfo, content: e.target.value });
            }}
            handleShortValue={(e) =>
              setAdditionalInfo({ ...additionalInfo, title: e.target.value })
            }
          />
        ) : (
          <QuestionAnswer onSubmit={addAnswers}></QuestionAnswer>
        )}
        ;
        <h5
          className="lesson__add"
          onClick={inputs ? addData : addAnswers}
        >
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
        {inputs ? (
          <LessonContentPreview
            lessonsArray={data}
            handleDelete={handleDelete}
          />
        ) : (
          <QuestionContainer
            questionsArray={data}
            handleDelete={handleDelete}
          />
        )}
        
        <button className="lesson__add-button" onClick={() => inputs ? setPageInfo({ ...pageInfo, additionalInfos: data }) : setPageInfo({ ...pageInfo, questions: data })}>Confirm data</button>
      </div>      

    </div>
    </>
  );
};

export default AddLessonContainer;
