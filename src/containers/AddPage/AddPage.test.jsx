import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import AddPage from "./AddPage";

it("Should match the snapshot, with the props", () => {
  const { container } = customRender(
    <AddPage 
      shortLabelTextOne="Article Name" 
      shortLabelTextTwo="Additional Subtitle(s) (optional)" 
      shortPlaceHolderTextOne="e.g. Financial Forest" 
      shortPlaceHolderTextTwo="e.g. Fund Manager" 
      freeTypeLabelTextOne="Article Overview"
      freeTypeLabelTextTwo="Additional Content (optional)"
    />
  );
  expect(container).toMatchSnapshot();
});

it("Should display an error message above the buttons if the first short's label name does not contain the word optional and the input is empty", () => {
    render(<AddPage 
            shortLabelTextOne="short text one"
        />);

    const shortTextOneInput = screen.queryByRole("textbox", {name: /short text one/i})
    userEvent.type(shortTextOneInput, "");

    const button = screen.getByRole("button", {name: /Submit/i});
    userEvent.click(button);

    const errorMessage = screen.queryByText("Please enter the info needed for short text one");

    expect(errorMessage).toBeInTheDocument();
});

it("Should display an error message above the buttons if the second short's label name does not contain the word optional and the input is empty", () => {
    render(<AddPage 
            shortLabelTextOne="optional"
            shortLabelTextTwo="short text two" 
            freeTypeLabelTextOne="optional"
            freeTypeLabelTextTwo="optional"
        />);

    const shortTextTwoInput = screen.queryByRole("textbox", {name: /short text two/i})
    userEvent.type(shortTextTwoInput, "");

    const button = screen.getByRole("button", {name: /Submit/i});
    userEvent.click(button);

    const errorMessage = screen.queryByText("Please enter the info needed for short text two");

    expect(errorMessage).toBeInTheDocument();
});

it("Should display an error message above the buttons if the first free type's label name does not contain the word optional and the input is empty", () => {
    render(<AddPage 
            shortLabelTextOne="optional"
            shortLabelTextTwo="optional" 
            freeTypeLabelTextOne="free type one"
            freeTypeLabelTextTwo="optional"
        />);

    const freeTypeOneInput = screen.queryByRole("textbox", {name: /free type one/i})
    userEvent.type(freeTypeOneInput, "");

    const button = screen.getByRole("button", {name: /Submit/i});
    userEvent.click(button);

    const errorMessage = screen.queryByText("Please enter the info needed for free type one");

    expect(errorMessage).toBeInTheDocument();
});

it("Should display an error message above the buttons if the second free type's label name does not contain the word optional and the input is empty", () => {
    render(<AddPage 
            shortLabelTextOne="optional"
            shortLabelTextTwo="optional" 
            freeTypeLabelTextOne="optional"
            freeTypeLabelTextTwo="free type two"
        />);

    const freeTypeTwoInput = screen.queryByRole("textbox", {name: /free type two/i})
    userEvent.type(freeTypeTwoInput, "");

    const button = screen.getByRole("button", {name: /Submit/i});
    userEvent.click(button);

    const errorMessage = screen.queryByText("Please enter the info needed for free type two");

    expect(errorMessage).toBeInTheDocument();
});

it("Should not display an error message above the buttons if the fields are empty when their label contains the word optional", () => {
    render(<AddPage 
            shortLabelTextOne="optional" 
            shortLabelTextTwo="optional"
            freeTypeLabelTextOne="optional"
            freeTypeLabelTextTwo="optional"
        />);

    const optionalInput = screen.queryByRole("textbox", {name: /optional/i})
    userEvent.type(optionalInput, "");

    const button = screen.getByRole("button", {name: /Submit/i});
    userEvent.click(button);

    const errorMessage = screen.queryByText("Please enter the info needed for optional");

    expect(errorMessage).not.toBeInTheDocument();
});
