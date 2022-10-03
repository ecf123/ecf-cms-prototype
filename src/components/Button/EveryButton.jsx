import React from 'react'
import Button from './Button'
import './Button.scss'
import bin from "../../assets/bin-icon.svg";
import pencil from "../../assets/pen-icon.svg";
import edit from "../../assets/notepad-and-pencil-grey.svg";
import plus from "../../assets/circular-plus-icon.svg";


const EveryButton = () => {
  return (
    <>
    < Button style={"button red square-border small"} imgStyle={"small-img"} textStyle={"text small-text red"} buttonIcon={bin} buttonText={"Delete"}/>
    < Button style={"button grey square-border small"} imgStyle={"small-img"} textStyle={"text small-text grey"} buttonIcon={edit} buttonText={"Edit"}/>
    < Button style={"button black round-border medium"} imgStyle={"medium-img"} textStyle={"text medium-text black"} buttonIcon={pencil} buttonText={"Add Course"}/>
    < Button style={"button black round-border medium"} imgStyle={"large-img"} textStyle={"text large-text black"} buttonIcon={plus} buttonText={"Add Lesson"}/>
    < Button style={"button black round-border large"}textStyle={"text large-text black"} buttonText={"Submit"}/>
    < Button style={"button grey round-border large"}textStyle={"text large-text grey"} buttonText={"Cancel"}/>
    < Button style={"button red round-border medium"} imgStyle={"medium-img"} textStyle={"text medium-text red"} buttonIcon={bin} buttonText={"Delete"}/>
    < Button style={"button grey round-border small"}  textStyle={"text small-text grey"}  buttonText={"Upload Image"}/>
    < Button style={"button grey round-border medium"} imgStyle={"medium-img"} textStyle={"text medium-text grey"} buttonIcon={pencil} buttonText={"Edit"}/>
    < Button style={"button login-black square-border"}  textStyle={"text large-text black"} buttonText={"Login"}/>
    < Button style={"button login-green square-border"}  textStyle={"text large-text green"} buttonText={"Login"}/>
    < Button style={"button red rounded-square-border modal"} textStyle={"text modal-text red"} buttonText={"Delete"}/>
    < Button style={"button white rounded-square-border border modal"} textStyle={"text modal-text white"} buttonText={"Cancel"}/>
    </>
  )
}

export default EveryButton