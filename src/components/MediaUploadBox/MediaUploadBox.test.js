import MediaUploadBox from "./MediaUploadBox";
import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import rollercoasterImg from "../../assets/rollercoaster-image.svg";

describe("MediaUploadBox component", () => {
  it("matches the snapshot taken without the file", () => {
    const { container } = customRender(<MediaUploadBox />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot taken with the file", () => {
    const { container } = customRender(
      <MediaUploadBox file={rollercoasterImg} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should display remove button when there is a file", () => {
    render(<MediaUploadBox file={rollercoasterImg} />);
    const paragraph = screen.getByText("Remove");
    expect(paragraph).toBeInTheDocument();
  });

  it("should not render the upload button when there is a file added", () => {
    render(<MediaUploadBox file={rollercoasterImg} />);
    const uploadButton = screen.queryByText("Upload Image");
    expect(uploadButton).toBeFalsy();
  });

  it("should render the alt text if the file isn't a picture", () => {
    render(
      <MediaUploadBox file={"../../../README.md"} fileName={"README.md"} />
    );
    const altText = screen.getByAltText("README.md");
    expect(altText).toBeTruthy();
  });

  it("should display the upload button on render", () => {
    render(<MediaUploadBox />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
