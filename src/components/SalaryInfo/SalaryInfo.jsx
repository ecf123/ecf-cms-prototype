import "./SalaryInfo.scss";

const SalaryInfo = ({ avgSalaryNumber, salariesObj }) => {
  const titleJSX = Object.keys(salariesObj).map((role) => {
    return (
      <h6 key={role} className="salary__title">
        {role}
      </h6>
    );
  });

  const payJSX = Object.values(salariesObj).map((salary, index) => {
    return (
      <h6 key={index} className="salary__pay">
        {salary}
      </h6>
    );
  });

  return (
    <div className="salary">
      <h5 className="salary__heading">Average Salaries</h5>
      <h2 className="salary__number">{avgSalaryNumber}</h2>
      <span className="salary__line"></span>
      <div className="salary__jobs">
        <div className="salary__titles">{titleJSX}</div>
        <div className="salary__pays">{payJSX}</div>
      </div>
    </div>
  );
};

export default SalaryInfo;
