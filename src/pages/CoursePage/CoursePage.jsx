import CourseContainer from "../../containers/CourseContainer/CourseContainer";
import mobilePayment from "../../assets/mobile-payment.svg";

const CoursePage = () => {
  const data = {
    name: "Commercial Banking",
    title: "Commercial Banking with Barclay's",
    image: mobilePayment,
    description:
      "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
    categories: ["Finance", "Investing"],
    provider: "barclays",
    lessons: [
      {
        duration: "15 minutes",
        title: "The Role of Banking and the Financial System",
      },
      {
        duration: "10 minutes",
        title: "Currency Risk Management",
      },
    ],
  };
  return <CourseContainer data={data} />;
};

export default CoursePage;
