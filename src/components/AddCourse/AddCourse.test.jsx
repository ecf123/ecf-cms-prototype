import {render, screen} from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import AddCourseContainer from "./AddCourseContainer";

it("it should match the snapshot with props", () => {
    const { container } = customRender(<AddCourseContainer shortLabelTextOne={"Course Name"}/>);
    expect(container).toMatchSnapshot();
});

it("Should display an error message above the buttons if the all short's label name and the input is empty", () => {
render(
    <AddCourseContainer
    shortLabelTextOne="short text one"
    shortLabelTextTwo="optional"
    freeTypeLabelTextOne="optional"
    freeTypeLabelTextTwo="optional"
    />
);

const shortTextOneInput = screen.queryByRole("textbox", {
    name: /short text one/i,
});
userEvent.type(shortTextOneInput, "");

const button = screen.getByRole("button", { name: /Submit/i });
userEvent.click(button);

const errorMessage = screen.queryByText(
    "Please enter the info needed in the empty red boxes"
);

expect(errorMessage).toBeInTheDocument();
});