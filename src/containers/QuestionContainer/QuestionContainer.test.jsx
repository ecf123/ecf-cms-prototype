import { customRender } from "../../utils/testUtils";
import QuestionContainer from "./QuestionContainer";

const questionsArray = [
  {
    question: "What sells on Amazon the most",
    answers: [
      "Grenade Protein Bars *",
      "pHD Smart Plan Protein Bar *",
      "Professional Diva HairDryer",
      "Black Plus Decker Heater",
      "Serious Mass Protein Powder *",
    ],
    questionNumber: 1,
  },
  {
    question: "What sells on Amazon the most",
    answers: [
      "Grenade Protein Bars *",
      "pHD Smart Plan Protein Bar *",
      "Professional Diva HairDryer",
      "Black Plus Decker Heater",
      "Serious Mass Protein Powder *",
    ],
    questionNumber: 1,
  },
  {
    question: "What sells on Amazon the most",
    answers: [
      "Grenade Protein Bars *",
      "pHD Smart Plan Protein Bar *",
      "Professional Diva HairDryer",
      "Black Plus Decker Heater",
      "Serious Mass Protein Powder *",
    ],
    questionNumber: 1,
  },
  {
    question: "What sells on Amazon the most",
    answers: [
      "Grenade Protein Bars *",
      "pHD Smart Plan Protein Bar *",
      "Professional Diva HairDryer",
      "Black Plus Decker Heater",
      "Serious Mass Protein Powder *",
    ],
    questionNumber: 1,
  },
  {
    question: "What sells on Amazon the most",
    answers: [
      "Grenade Protein Bars *",
      "pHD Smart Plan Protein Bar *",
      "Professional Diva HairDryer",
      "Black Plus Decker Heater",
      "Serious Mass Protein Powder *",
    ],
    questionNumber: 1,
  },
  {
    question: "What sells on Amazon the most",
    answers: [
      "Grenade Protein Bars *",
      "pHD Smart Plan Protein Bar *",
      "Professional Diva HairDryer",
      "Black Plus Decker Heater",
      "Serious Mass Protein Powder *",
    ],
    questionNumber: 1,
  },
];

it("Should match the snapshot, with the data inserted", () => {
  const { container } = customRender(
    <QuestionContainer questionsArray={questionsArray} />
  );
  expect(container).toMatchSnapshot();
});
