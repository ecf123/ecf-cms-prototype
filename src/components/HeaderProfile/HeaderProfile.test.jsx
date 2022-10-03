import {render, screen} from "@testing-library/react"
import { customRender } from "../../utils/testUtils";
import HeaderProfile from "./HeaderProfile"

it("Should render the HeaderProfile", () => {
    const { container } = customRender(
        <HeaderProfile />
      );
    expect(container).toMatchSnapshot();
})

it("Should render the images (svgs) in the HeaderProfile", () => {
    render(<HeaderProfile/>)
    const images = screen.getAllByRole("img");
    images.forEach(image => {
        expect(image).toBeInTheDocument();
    });  

})

it("Should display the Name and Role in the HeaderProfile", () => {
    render(<HeaderProfile/>)
    const name = screen.getByText("Brett Zieme");
    const role = screen.getByText("Admin");

    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
})

it("Should display the alt text for the image if the image doesn't load", () => {
      render(<HeaderProfile/>)
      const profileAlt = screen.getByAltText("Profile Picture");
      const arrowAlt = screen.getByAltText("Toggle");

      expect(profileAlt).toBeInTheDocument();
      expect(arrowAlt).toBeInTheDocument();
})