import { customRender } from "../../utils/testUtils";

it("renders the Logo" ,()=>{
    const {container} = customRender(

    )
    expect(container).toMatchSnapshot();
});