import { customRender } from "../../utils/testUtils";
import Logo from './Logo'

it("renders the Logo" ,()=>{
    const {container} = customRender(
        <Logo />
    )
    expect(container).toMatchSnapshot();
});