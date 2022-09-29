import { customRender } from "../../utils/testUtils";
import NavBar from "./NavBar";

it("renders the NavBar" ,()=>{
    const {container} = customRender(
        <NavBar />
    )
    expect(container).toMatchSnapshot();
});

it("shows Dashboard as selected on load", () => {
    const {container} = customRender(
        <NavBar />
    )
    
})