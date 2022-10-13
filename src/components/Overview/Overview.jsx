import "./Overview.scss";

const Overview = ({ header, text }) => {
  return (
    <div className="overview">
      <h2 className="overview__header">{header}</h2>
      <p className="overview__text">{text}</p>
    </div>
  );
};

export default Overview;
