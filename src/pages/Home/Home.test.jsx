import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "./Home"

it("should render error message if email address doesn't contains '@'", () => {
    render(<Home />)
})