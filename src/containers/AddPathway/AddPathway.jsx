import './AddPathway.scss';
// import { useState } from 'react';


import Button from "../../components/Button/Button";
import Short from '../../components/Short/Short';
import FreeType from '../../components/InputBoxFreeType/FreeType';

const AddPathway = () => {

    // const [file, setFile] = useState();
    // const [fileName, setFileName] = useState();
    // const handleFileChange = (e) => {
    //   if (!file) setFileName(e.target.files[0].name);
    //   file ? setFile(null) : setFile(URL.createObjectURL(e.target.files[0]));
    // }

  return (
    <div className='add-pathway'>

        <div className='add-pathway__headings'>
            <h1 className="add-pathway__main-header">ADD PATHWAY</h1>
            <h5 className="add-pathway__sub-header">Egestas est, turpis pellentesque ut sed. Varius facilisis nisl et tortor.</h5>
        </div>

        <div className='add-pathway__input-texts'>
            {/* Pathway Name */}
            <Short 
                shortLabelText="Pathway Name" 
                shortType="text" 
                shortPlaceHolderText="e.g. Financial Forest"
            />
            {/* Pathway Overview */}
            <FreeType 
                freeTypeLabelText="Pathway Overview" 
            />

            {/* Pahway Career Description */}
            <FreeType 
                freeTypeLabelText="Pathway Career Description" 
            />
            {/* Pathway Career(s) */}
            <Short 
                shortLabelText="Pathway Career(s)" 
                shortType="text" 
                shortPlaceHolderText="e.g. Fund Manager"
            />
            <div className="add-pathway__buttons">
                <Button 
                    style={"button light-grey rounded-square-border border modal"}
                    textStyle={"text modal-text light-grey"}
                    buttonText={"Cancel"}
                    // onClick={handleDelete}
                />
                <Button
                style={"button green rounded-square-border border modal"}
                textStyle={"text modal-text green"}
                buttonText={"Create"}
                // onClick={handleDelete} 
                />
            </div>
        </div>
        <div className='add-pathway__media-upload'>
            {/* Input */}
        </div>
        
    </div>
  )
}

export default AddPathway