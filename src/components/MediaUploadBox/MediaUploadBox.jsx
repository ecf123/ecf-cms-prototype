import "./MediaUploadBox.scss";
// import { useState } from "react";
import bin from "../../assets/bin-icon.svg";

const MediaUploadBox = ({
  file,
  handleFileChange,
  uploadLabelName = "Pathway Thumbnail",
  uploadButtonText = "Upload Image",
  fileName,
}) => {
  // const MediaUploadBox = () => {
  //   // it has to be taken out to the container, once the container is made
  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState();
  // const handleFileChange = (e) => {
  //   if (!file) setFileName(e.target.files[0].name);
  //   file ? setFile(null) : setFile(URL.createObjectURL(e.target.files[0]));
  // };

  return (
    <div className="thumbnail">
      <label htmlFor="file-input" className="thumbnail__label">
        {uploadLabelName}
      </label>
      <div className="thumbnail__container">
        {!file && (
          <div className="thumbnail__btn--wrapper">
            <button className="thumbnail__btn">
              <span className="thumbnail__btn--text">{uploadButtonText}</span>
            </button>
            <input
              className="thumbnail__btn--input"
              id="file-input"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        )}
        {file && (
          <img src={file} alt={fileName} className="thumbnail__picture" />
        )}
      </div>
      {file && (
        <div className="thumbnail__remove" onClick={handleFileChange}>
          <img className="thumbnail__remove--bin" src={bin} alt="bin icon" />
          <p className="thumbnail__remove--text">Remove</p>
        </div>
      )}
    </div>
  );
};

export default MediaUploadBox;
