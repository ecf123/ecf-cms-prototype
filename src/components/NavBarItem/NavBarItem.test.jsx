import { customRender } from "../../utils/testUtils";
import NavBarItem from "./NavBarItem";

it("renders the NavBarItem" ,()=>{
    const {container} = customRender(
        <NavBarItem imageSrc="" text="Dashboard" link=""/>
    )
    expect(container).toMatchSnapshot();
});