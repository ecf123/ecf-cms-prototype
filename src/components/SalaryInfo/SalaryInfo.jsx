import "./SalaryInfo.scss";

const SalaryInfo = ({ salariesObj }) => {
  const salariesIntArray = Object.values(salariesObj).map((salary) => {
    return salary.toLocaleString("en");
  });

  const titleJSX = Object.keys(salariesObj).map((role) => {
    return (
      <h6 key={role} className="salary__title">
        {role}
      </h6>
    );
  });

  const payJSX = salariesIntArray.map((salary, index) => {
    return (
      <h6 key={index} className="salary__pay">
        £{salary}
      </h6>
    );
  });

  const avgPayJSX = Object.values(salariesObj)
    .reduce((a, b) => a + b / Object.keys(salariesObj).length)
    .toLocaleString("en");

  return (
    <div className="salary">
      <h5 className="salary__heading">Average Salaries</h5>
      <h2 className="salary__number">£{avgPayJSX}</h2>
      <span className="salary__line"></span>
      <div className="salary__jobs">
        <div className="salary__titles">{titleJSX}</div>
        <div className="salary__pays">{payJSX}</div>
      </div>
    </div>
  );
};

export default SalaryInfo;
