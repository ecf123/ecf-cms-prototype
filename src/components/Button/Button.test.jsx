import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Button from "./Button";

it("Should render the Button", () => {
  const { container } = customRender(<Button />);
  expect(container).toMatchSnapshot();
});

it("Should render the svg in the Button", () => {
  render(
    <Button>
      <div title="svg">svg</div>
    </Button>
  );
  const svg = screen.getByTitle("svg");
  expect(svg).toBeInTheDocument();
});

it("Should display the text in the button", () => {
  render(<Button buttonText="Cancel" />);
  const text = screen.getByText("Cancel");
  expect(text).toBeInTheDocument();
});
