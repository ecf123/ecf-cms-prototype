import MediaUploadBox from "./MediaUploadBox";
import {render, fireEvent} from "@testing-library/react";

describe(MediaUploadBox, () => {
    it("should display the picture chosen by the user on the screen", () => {
        const {getByRole} = render(<MediaUploadBox/>)
        const inputImg = getByRole("input", {type: "file"});
        fireEvent.click(inputImg);
        fireEvent.submit("https://th.bing.com/th/id/R.33d02c67b4a6e90abe2d7a58f764edd8?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0")

        expect(<MediaUploadBox/>).toContainElement("img");
    });

})

// test(MediaUploadBox, () => {
//     it("should remove the selected image if remove button is clicked", () => {
//         const {} = render(<MediaUploadBox/>)

//         expect().toBe();
//     });

// })