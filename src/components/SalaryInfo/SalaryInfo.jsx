import "./SalaryInfo.scss";

const SalaryInfo = ({
  salaryNumber,
  salaryTitle1,
  salaryTitle2,
  salaryTitle3,
  salaryPay1,
  salaryPay2,
  salaryPay3,
}) => {
  return (
    <div className="salary">
      <h5 className="salary__heading">Average Salaries</h5>
      <h2 className="salary__number">£99,999{salaryNumber}</h2>
      <span className="salary__line"></span>
      <div className="salary__jobs">
        <div className="salary__titles">
          <h6 className="salary__title">abcde{salaryTitle1}</h6>
          <h6 className="salary__title">abcde{salaryTitle2}</h6>
          <h6 className="salary__title">abcde{salaryTitle3}</h6>
        </div>
        <div className="salary__pays">
          <h6 className="salary__pay">abcde{salaryPay1}</h6>
          <h6 className="salary__pay">abcdfe{salaryPay2}</h6>
          <h6 className="salary__pay">abcddfdfe{salaryPay3}</h6>
        </div>
      </div>
    </div>
  );
};

export default SalaryInfo;
