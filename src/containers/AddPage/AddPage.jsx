import './AddPage.scss';
import { useState } from 'react';


import Button from "../../components/Button/Button";
import Short from '../../components/Short/Short';
import FreeType from '../../components/FreeType/FreeType';
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
    const [shortInputOne, setShortInputOne] = useState("");
    const [shortInputTwo, setShortInputTwo] = useState("");
    const [freeTypeInputOne, setFreeTypeInputOne] = useState("");
    const [freeTypeInputTwo, setFreeTypeInputTwo] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChange = (e) => {
      if (!file) setFileName(e.target.files[0].name);
      file ? setFile(null) : setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleShortValueOne = (e) => {
        setShortInputOne(e.target.value);
    }

    const handleShortValueTwo = (e) => {
        setShortInputTwo(e.target.value);
    }

    const handleFreeTypeValueOne = (e) => {
        setFreeTypeInputOne(e.target.value);
    }

    const handleFreeTypeValueTwo = (e) => {
        setFreeTypeInputTwo(e.target.value);
    }

    const storeInputs = () => {
        if(shortInputOne == "" && !shortLabelTextOne.includes("optional")){
            setErrorMessage("Please enter the info needed for " + shortLabelTextOne);
        }
        else if (shortInputTwo == "" && !shortLabelTextTwo.includes("optional")){
            setErrorMessage("Please enter the info needed for " + shortLabelTextTwo);
        }
        else if (freeTypeInputOne == "" && !freeTypeLabelTextOne.includes("optional")){
            setErrorMessage("Please enter the info needed for " + freeTypeLabelTextOne);
        }
        else if (freeTypeInputTwo == "" && !freeTypeLabelTextTwo.includes("optional")) {
            setErrorMessage("Please enter the info needed for " + freeTypeLabelTextTwo);
        }
        else {
            setErrorMessage("");
        }
    }

  return (
    <div className='add-pathway'>
        <div className='add-pathway__input-texts'>
            <Short 
                shortLabelText={shortLabelTextOne}
                shortPlaceHolderText={shortPlaceHolderTextOne}
                shortType="text" 
                handleShortValue={handleShortValueOne}
            />
            <FreeType 
                freeTypeLabelText={freeTypeLabelTextOne}
                handleFreeTypeValue={handleFreeTypeValueOne}
            />
            <Short 
                shortLabelText={shortLabelTextTwo}
                shortType="text" 
                shortPlaceHolderText={shortPlaceHolderTextTwo}
                handleShortValue={handleShortValueTwo}
            />
            <FreeType 
                freeTypeLabelText={freeTypeLabelTextTwo}
                handleFreeTypeValue={handleFreeTypeValueTwo}
            />

            <p className='add-pathway__error-message'>{errorMessage}</p>
           

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
                    buttonFunction={storeInputs}
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