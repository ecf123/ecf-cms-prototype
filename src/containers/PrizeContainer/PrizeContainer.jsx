import "./PrizeContainer.scss"
import MoreOptions from "../../components/MoreOptions/MoreOptions"
import Card from "../../components/Card/Card"

const PrizeContainer = ({prizeData, optionsData}) => {
  
const prizeHeading = prizeData.heading;
const prizeImage = prizeData.image;
const prizeOverview = prizeData.overview;
const prizeSkills = prizeData.skillPoints;
const prizeDate = prizeData.date;
const prizeCondition = prizeData.isLocked;
const optionTitle = optionsData.title;
const optionDesc = optionsData.desc;


  return (
    <div className="prize-container">
        <div className="prize-container__left-column"/>
        <div className="prize-container__middle-column">
          <Card title={prizeHeading} img={prizeImage} dateOrTime={prizeDate} cardInfo={prizeOverview} links={prizeSkills} condition={prizeCondition}/>
        </div>
        <div className="prize-container__right-column">
          <MoreOptions title={optionTitle} description={optionDesc} />
        </div>
    </div>
  )
}
export default PrizeContainer