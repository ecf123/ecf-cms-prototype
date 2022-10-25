import "./MediaUploadBox.scss";
import bin from "../../assets/bin-icon.svg";
import Button from "../Button/Button";

const MediaUploadBox = ({
  file,
  handleFileChange,
  uploadLabelName,
  uploadButtonText,
  fileName,
  newId,
}) => {
  return (
    <div className="thumbnail">
      <label htmlFor={newId} className="thumbnail__label">
        {uploadLabelName}
      </label>
      <div className="thumbnail__container">
        {!file && (
          <div className="thumbnail__btn--wrapper">
            <Button
              style={"button light-grey round-border small"}
              textStyle={"text small-text light-grey"}
              buttonText={uploadButtonText}
            />
            <input
              className="thumbnail__btn--input"
              id={newId}
              type="file"
              onChange={handleFileChange}
              accept="image/*,video/*,audio/*,.txt"
            />
          </div>
        )}
        {file && (
          <img src={file} alt={fileName} className="thumbnail__picture" />
        )}
      </div>
      {file && (
        <button className="thumbnail__remove" onClick={handleFileChange}>
          <img className="thumbnail__remove--bin" src={bin} alt="bin icon" />
          <p className="thumbnail__remove--text">Remove</p>
        </button>
      )}
    </div>
  );
};

export default MediaUploadBox;
