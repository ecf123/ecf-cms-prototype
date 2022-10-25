import IndexContainer from "../../containers/IndexContainer/IndexContainer";

const PrizeIndex = () => {
  const prizeData = {
    heading: "Earn a £5 Amazon Voucher",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
    isLocked: true,
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    skillPoints: [400, 1],
    date: "25-10-2022",
  };

  const optionsData = {
    title: "More",
    description:
      "tinctio quo commodi, sequi non itaque corporis delectus magnam reprehenderit, qui voluptatum excepturi quos inventore illum laboriosam illo est exercitationem maxime impedit",
  };

  return (
    <IndexContainer
      data={prizeData}
      optionsData={optionsData}
      title="Prize Index"
    />
  );
};

export default PrizeIndex;
