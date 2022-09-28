import {render, screen} from "@testing-library/react";
import Title from "./Title";

it("should render the title", () => {
    render(<Title />)
    const title = screen.queryByText("Welcome Back");
    expect(title).toBeInTheDocument();
}
)

it("should render the content", () => {
    render(<Title />)
    const title = screen.queryByText("Feugiat magna viverra pellentesque habitant. Libero id amet nisl, tellus cras eleifend et in.");
    expect(title).toBeInTheDocument();
}
)