import { customRender } from "../../utils/testUtils";
import LoginParagraph from "./LoginParagraph";

it("should render the paragraph", () => {
    const { container } = customRender(
    <LoginParagraph>
        <p>Feugiat magna viverra pellentesque habitant. Libero id amet nisl, tellus cras eleifend et in. </p>
    </LoginParagraph>
    )
    expect (container).toMatchSnapshot();
}
)