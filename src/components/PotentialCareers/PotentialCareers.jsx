import "./PotentialCareers.scss";

const PotentialCareers = ({ potentialCareers }) => {
  const careerJsx = potentialCareers.map((career) => {
    return (
      <li key={career} className="career__item">
        {career}
      </li>
    );
  });

  return (
    <div className="career">
      <h5 className="career__heading">Potential Careers</h5>
      <ul className="career__list">{careerJsx}</ul>
    </div>
  );
};

export default PotentialCareers;
