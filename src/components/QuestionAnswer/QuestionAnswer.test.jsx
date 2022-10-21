import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";

import QuestionAnswer from "./QuestionAnswer";

it("should render the question and answer form", () => {
    const {container} = customRender (<QuestionAnswer />);
    expect(container).toMatchSnapshot();
})

it("should submit the form", () => {
    const onSubmit = jest.fn();
    const { getByText} = render(<QuestionAnswer onSubmit={onSubmit} />);
    fireEvent.submit(getByText("Answers"));
    expect(onSubmit).toHaveBeenCalled();
});