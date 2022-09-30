import {render, screen} from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Title from "./Title";

it("should render the title", () => {
    const { container } = customRender(
    <Title>
        <h1>Welcome Back</h1>
        <p>Feugiat magna viverra pellentesque habitant. Libero id amet nisl, tellus cras eleifend et in. </p>
    </Title>
    )
    expect (container).toMatchSnapshot();
}
)

it("should render the content", () => {
    render(<Title />)
    const title = screen.queryByText("Feugiat magna viverra pellentesque habitant. Libero id amet nisl, tellus cras eleifend et in.");
    expect(title).toBeInTheDocument();
}
)