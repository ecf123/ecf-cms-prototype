import { render, screen } from "@testing-library/react";
import AddQuestion from "./AddQuestion";
import { customRender } from "../../utils/testUtils";

const answer = ["Grenade Protein Bars *", "pHD Smart Plan Protein Bar *", "Professional Diva HairDryer", "Black Plus Decker Heater", "Serious Mass Protein Powder *"];
  const question = "What sells on Amazon the most"
  const questionNumber = 7

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <AddQuestion question= {question} answers={answer} questionNumber={questionNumber}/>
  );
  expect(container).toMatchSnapshot();
});


it("Should render the Questions title", () => {
  render(<AddQuestion question= {question} answers={answer} questionNumber={questionNumber}/>);
  const title = screen.getByText("heading");
  expect(title).toBeInTheDocument();
});

it("Should render the Questions answers", () => {
    render(<AddQuestion question= {question} answers={answer} questionNumber={questionNumber}/>);
    const label = screen.getByText("Label Text!");
    expect(label).toBeInTheDocument();
  });

it("Should render the Questions buttons svg", () => {
render(<AddQuestion question= {question} answers={answer} questionNumber={questionNumber}/>);
const label = screen.getByText("Label Text!");
expect(label).toBeInTheDocument();
});