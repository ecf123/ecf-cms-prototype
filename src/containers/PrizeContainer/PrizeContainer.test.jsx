import { customRender } from "../../utils/testUtils";
import PrizeContainer from "./PrizeContainer";

const prizeData = {
  heading: "Earn a £5 Amazon Voucher",
  id: 1,
  image:
    "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
  isLocked: true,
  overview:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
  skillPoints: [400, 1],
  date: "25-10-2022",
};
const optionsData = {
  title: "more options for article",
  desc: "description for options",
};

it("Should match the snapshot", () => {
  const { container } = customRender(
    <PrizeContainer
      prizeData={prizeData}
      optionsData={optionsData}
      handleEdit={"handleEdit"}
      handleDelete={"handleDelete"}
    />
  );
  expect(container).toMatchSnapshot();
});
