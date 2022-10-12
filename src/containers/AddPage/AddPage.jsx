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

    const [pageInfo, setPageInfo] = useState(
        {
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
      if (!pageInfo.file) setPageInfo({fileName: e.target.files[0].name});
      pageInfo.file ? setPageInfo({ ...pageInfo, file: null}) : setPageInfo({ ...pageInfo, file: URL.createObjectURL(e.target.files[0])});
    }

    const handleChange = (e) => {
        console.log(e.target.name);
        setPageInfo({ ...pageInfo, [e.target.name]: e.target.value});
    }

    const storeInputs = () => {
        setPageFirstOpened(false);
        if((pageInfo.shortInputOne == "" && !shortLabelTextOne.includes("optional")) || 
        (pageInfo.freeTypeInputOne == "" && !freeTypeLabelTextOne.includes("optional")) || 
        (pageInfo.shortInputTwo == "" && !shortLabelTextTwo.includes("optional")) || 
        (pageInfo.freeTypeInputTwo == "" && !freeTypeLabelTextTwo.includes("optional"))){
            setErrorMessage("Please enter the info needed in the empty red boxes");
        }else {
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
                name="shortInputOne"
                inputClassName={((pageInfo.shortInputOne == "" && !shortLabelTextOne.includes("optional") && !pageFirstOpened) || (!pageFirstOpened && !shortLabelTextOne.includes("optional"))) ? "short__input--empty" : "short__input"}
                handleShortValue={handleChange}
            />
            <FreeType 
                freeTypeLabelText={freeTypeLabelTextOne}
                name="freeTypeInputOne"
                inputClassName={((pageInfo.freeTypeInputOne == "" && !freeTypeLabelTextOne.includes("optional") && !pageFirstOpened) || (!pageFirstOpened && !shortLabelTextOne.includes("optional"))) ? "free-type__input--empty" : "free-type__input"}
                handleFreeTypeValue={handleChange}
            />
            <Short 
                shortLabelText={shortLabelTextTwo}
                shortType="text" 
                shortPlaceHolderText={shortPlaceHolderTextTwo}
                name="shortInputTwo"
                inputClassName={((pageInfo.shortInputTwo == "" && !shortLabelTextTwo.includes("optional") && !pageFirstOpened) || (!pageFirstOpened && !shortLabelTextOne.includes("optional"))) ?  "short__input--empty" : "short__input"}
                handleShortValue={handleChange}
            />
            <FreeType 
                freeTypeLabelText={freeTypeLabelTextTwo}
                name="freeTypeInputTwo"
                inputClassName={((pageInfo.freeTypeInputTwo == "" && !freeTypeLabelTextTwo.includes("optional") && !pageFirstOpened) || (!pageFirstOpened && !shortLabelTextOne.includes("optional"))) ? "free-type__input--empty" : "free-type__input"}
                handleFreeTypeValue={handleChange}
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
                file={pageInfo.file} 
                handleFileChange={handleFileChange} 
                uploadLabelName={uploadLabelName} 
                uploadButtonText="Upload Image" 
                fileName={pageInfo.fileName} 
            />
        </div>
    </div>
  )
}

export default AddPathway