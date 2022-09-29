import MediaUploadBox from "./MediaUploadBox";
import {render, screen} from "@testing-library/react";
import rollercoasterimg from "../../assets/rollercoaster-image.svg";
import userEvent from '@testing-library/user-event';

const fileImage = rollercoasterimg;
describe(MediaUploadBox, () => {
    // it("should display the picture chosen by the user on the screen", () => {
    //     render(<MediaUploadBox file={fileImage}/>) 
    //     // const inputImg = getByRole("input", {type: "file"});
    //     // userEvent.click(inputImg);
    //     const paragraph = screen.getByRole("paragraph");

    //     expect(paragraph).toBeInTheDocument();
    // });

    it("should display thumbnail on render", () => {
        render(<MediaUploadBox/>);
        const label = screen.getByLabelText("Pathway Thumbnail");

        expect(label).toBeTruthy();
    })
    it("should display the upload button on render", () => {
        render(<MediaUploadBox/>);
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument()
    })
    // it("should contain input in the document", () => {
    //     render(<MediaUploadBox/>);
    //     const input = screen.getByText("Remove");

    //     expect(input).not.toBeVisible();
    // })

})

// test(MediaUploadBox, () => {
//     it("should remove the selected image if remove button is clicked", () => {
//         const {} = render(<MediaUploadBox/>)

//         expect().toBe();
//     });

// })