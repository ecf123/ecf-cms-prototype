import "./SalaryInfo.scss";

const SalaryInfo = ({ avgSalaryNumber }) => {
  const jobsObject = {
    Advisor: "£25,000",
    Analyst: "£5,000",
    Audit: "£30,000",
    Consultant: "£100,000",
  };

  const titleJSX = Object.keys(jobsObject).map((job) => {
    return (
      <h6 key={job} className="salary__title">
        {job}
      </h6>
    );
  });

  const payJSX = Object.values(jobsObject).map((job) => {
    return (
      <h6 key={job} className="salary__pay">
        {job}
      </h6>
    );
  });

  return (
    <div className="salary">
      <h5 className="salary__heading">Average Salaries</h5>
      <h2 className="salary__number">£999,999{avgSalaryNumber}</h2>
      <span className="salary__line"></span>
      <div className="salary__jobs">
        <div className="salary__titles">{titleJSX}</div>
        <div className="salary__pays">{payJSX}</div>
      </div>
    </div>
  );
};

export default SalaryInfo;
