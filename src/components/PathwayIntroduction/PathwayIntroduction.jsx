import "./PathwayIntroduction.scss";
const PathwayIntroduction = ({ image, description }) => {
  return (
    <div className="pathway-introduction">
      <img
        className="pathway-introduction__image"
        src={image}
        alt="pathway thumbnail"
      />
      <h2 className="pathway-introduction__title">Pathway Overview</h2>
      <p className="pathway-introduction__description">{description}</p>
    </div>
  );
};

export default PathwayIntroduction;
