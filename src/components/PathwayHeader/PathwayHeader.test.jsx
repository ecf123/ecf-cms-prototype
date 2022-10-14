import PathwayHeader from "./PathwayHeader";
import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";
import headingImage from "../../assets/mobile-growing-investment.svg";
import companyIcon from "../../assets/barclays-icon-white-background.svg";

it("should render the pathway header with props", () => {
  const { container } = customRender(
    <PathwayHeader
      headingTitle="Commercial Banking with Barclay's"
      headingImage={headingImage}
      companyIcon={companyIcon}
      links={["Finance", "Investing"]}
      condition={false}
      iconAltText="Barclays Icon"
      imageAltText="Mobile Growing Investment"
    />
  );
  expect(container).toMatchSnapshot();
});

it("should render the pathway header title", () => {
  render(
    <PathwayHeader
      headingTitle="Commercial Banking with Barclay's"
      headingImage={headingImage}
      companyIcon={companyIcon}
      links={["Finance", "Investing"]}
      condition={false}
      iconAltText="Barclays Icon"
      imageAltText="Mobile Growing Investment"
    />
  );
  const title = screen.getByRole("heading");
  expect(title).toBeInTheDocument();
});

it("should render the pathway header links", () => {
  render(
    <PathwayHeader
      headingTitle="Commercial Banking with Barclay's"
      headingImage={headingImage}
      companyIcon={companyIcon}
      links={["Finance", "Investing"]}
      condition={false}
      iconAltText="Barclays Icon"
      imageAltText="Mobile Growing Investment"
    />
  );
  const linksOne = screen.getByText(/Finance/);
  const linksTwo = screen.getByText(/Investing/);
  expect(linksOne).toBeInTheDocument();
  expect(linksTwo).toBeInTheDocument();
});

it("should render the pathway header image and icon", () => {
  render(
    <PathwayHeader
      headingTitle="Commercial Banking with Barclay's"
      headingImage={headingImage}
      companyIcon={companyIcon}
      links={["Finance", "Investing"]}
      condition={false}
      iconAltText="Barclays Icon"
      imageAltText="Mobile Growing Investment"
    />
  );
  const icon = screen.getByAltText("Barclays Icon");
  const image = screen.getByAltText("Mobile Growing Investment");
  expect(icon).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
