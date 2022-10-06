import { customRender } from "../../utils/testUtils";
import Title from "./LoginTitle";

it("should render the title", () => {
    const { container } = customRender(
    <Title>
        <h1>Welcome Back</h1>
    </Title>
    )
    expect (container).toMatchSnapshot();
}
)