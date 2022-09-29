import { customRender } from "../../utils/testUtils";
import NavBarItem from "./NavBarItem";

it("renders the NavBarItem" ,()=>{
    const {container} = customRender(
        <NavBarItem imageSrc="" text="Dashboard" link=""/>
    )
    expect(container).toMatchSnapshot();
});
it("Selected NavBarItem has additional className",()=>{
    const{container }=customRender(
        <NavBarItem  imageSrc="" text="Dashboard" link="" selected="Dashboard"/>
    )
    expect(container).toMatchSnapshot();
})