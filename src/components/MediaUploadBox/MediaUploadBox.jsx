import { useState } from "react";
import "./MediaUploadBox.scss";

const MediaUploadBox = () => {

    // it has to be taken out to the container, once the container is made 
    const [ file, setFile ] = useState();
    const handleChange = (e) => {
        console.log(e.target.files)
        file ? setFile(null) : setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className="thumbnail">
        <label>Pathway Thumbnail</label>
        <div className="thumbnail__container">
            {!file && <>
                <input type="file" onChange={handleChange}/>
            </>}
            {file && <img src={file} />}
        </div>
        {file && <p className="remove" onClick={handleChange}>Remove</p>}
    </div>
  )
}

export default MediaUploadBox