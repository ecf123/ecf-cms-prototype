import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import AddQuestion from "./AddQuestion";

const answers = [
  "Grenade Protein Bars *",
  "pHD Smart Plan Protein Bar *",
  "Professional Diva HairDryer",
  "Black Plus Decker Heater",
  "Serious Mass Protein Powder *",
];
const question = "What sells on Amazon the most";
const questionNumber = 7;

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <AddQuestion
      question={question}
      answers={answers}
      questionNumber={questionNumber}
    />
  );
  expect(container).toMatchSnapshot();
});

it("Should render the Questions title", () => {
  render(
    <AddQuestion
      question={question}
      answers={answers}
      questionNumber={questionNumber}
    />
  );
  const title = screen.getByText(/What sells on Amazon the most/);
  expect(title).toBeInTheDocument();
});

it("Should render the Question answers", () => {
  render(
    <AddQuestion
      question={question}
      answers={answers}
      questionNumber={questionNumber}
    />
  );
  const listItem = screen.getByRole("list");
  expect(listItem).toBeInTheDocument();
});

it("Should render the Question buttons svg", () => {
  render(
    <AddQuestion
      question={question}
      answers={answers}
      questionNumber={questionNumber}
    />
  );
  const deleteIcon = screen.getByAltText("Delete Question");
  const editIcon = screen.getByAltText("Edit Question");
  expect(deleteIcon).toBeInTheDocument();
  expect(editIcon).toBeInTheDocument();
});

it("Should render the Question with the correct answer", () => {
  render(
    <AddQuestion
      question={question}
      answers={answers}
      questionNumber={questionNumber}
    />
  );
  const correctAnswer = screen.queryAllByText(/correct/).length;
  expect(correctAnswer).toEqual(3);
});
