import "./PrizeContainer.scss"
import MoreOptions from "../../components/MoreOptions/MoreOptions"
import Card from "../../components/Card/Card"

const PrizeContainer = () => {
  const optionsData = {
    title: "more options for article",
    desc: "description for options",
    // optionDelete: handleDelete,
    // edit: handleEdit
  }

  const prizeData = {
    heading: "Earn a £5 Amazon Voucher",
    id: 1,
    image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
    isLocked: true,
    overview: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    skillPoints: [400,1],
    date: "25-10-2022"
  }
const prizeHeading = prizeData.heading;
const prizeImage = prizeData.image;
const prizeOverview = prizeData.overview;
const prizeSkills = prizeData.skillPoints;
const prizeDate = prizeData.date;
const prizeCondition = prizeData.isLocked;
const optionTitle = optionsData.title;
const optionDesc = optionsData.desc;
const optionDelete = optionsData.optionDelete;
const optionEdit = optionsData.edit;

  return (
    <div className="prize-container">
        <div className="prize-container__left-column"/>
        <div className="prize-container__middle-column">
          <Card title={prizeHeading} img={prizeImage} dateOrTime={prizeDate} cardInfo={prizeOverview} links={prizeSkills} condition={prizeCondition}/>
        </div>
        <div className="prize-container__right-column">
          <MoreOptions title={optionTitle} description={optionDesc} handleDelete={optionDelete} handleEdit={optionEdit}/>
        </div>
    </div>
  )
}
export default PrizeContainer