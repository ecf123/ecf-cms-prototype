import './AddPathway.scss';
import { useState } from 'react';


import Button from "../../components/Button/Button";
import Short from '../../components/Short/Short';
import FreeType from '../../components/InputBoxFreeType/FreeType';
import MediaUploadBox from '../../components/MediaUploadBox/MediaUploadBox';

const AddPathway = ({
    shortLabelTextOne, 
    shortLabelTextTwo, 
    shortPlaceHolderTextOne, 
    shortPlaceHolderTextTwo, 
    freeTypeLabelTextOne, 
    freeTypeLabelTextTwo, 
    uploadLabelName}) => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    // const [shortInputOne, setShortInputOne] = useState("");
    // const [shortInputTwo, setShortInputTwo] = useState("");
    // const [freeTypeInputOne, setFreeTypeInputOne] = useState("");
    // const [freeTypeInputTwo, setFreeTypeInputTwo] = useState("");

    const handleFileChange = (e) => {
      if (!file) setFileName(e.target.files[0].name);
      file ? setFile(null) : setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className='add-pathway'>
        <div className='add-pathway__input-texts'>
            <Short 
                shortLabelText={shortLabelTextOne}
                shortPlaceHolderText={shortPlaceHolderTextOne}
                shortType="text" 
            />
            <FreeType 
                freeTypeLabelText={freeTypeLabelTextOne}
            />
            <Short 
                shortLabelText={shortLabelTextTwo}
                shortType="text" 
                shortPlaceHolderText={shortPlaceHolderTextTwo}
            />
            <FreeType 
                freeTypeLabelText={freeTypeLabelTextTwo}
            />

            <div className="add-pathway__buttons">
                <Button 
                    style={"button light-grey round-border modal"}
                    textStyle={"text modal-text light-grey"}
                    buttonText={"Cancel"}
                />
                <Button
                    style={"button black round-border modal"}
                    textStyle={"text modal-text black"}
                    buttonText={"Submit"}
                />
            </div>
        </div>

        <div className='add-pathway__media-upload'>
            <MediaUploadBox 
                file={file} 
                handleFileChange={handleFileChange} 
                uploadLabelName={uploadLabelName} 
                uploadButtonText="Upload Image" 
                fileName={fileName} 
            />
        </div>
    </div>
  )
}

export default AddPathway