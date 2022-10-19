import Layout from "../../components/Layout/Layout";
import ListContainer from "../../containers/ListContainer/ListContainer";
import forHire from "../../assets/for-hire-image.svg";
import manInSuit from "../../assets/man-in-suit.svg";
import laptop from "../../assets/laptop-with-code.svg";

import profile from "../../assets/profile-picture.svg";

const Home = () => {
  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };

  const cards = [
    {
      title: "Want a winning CV? Try these 5 tips",
      cardInfo:
        "Et, cras pellentesque eget lectus quis quam porta. Molestie dictumst at at tincidunt.",
      img: forHire,
      dateOrTime: "17 Jan 2022",
      links: ["Professional Development", "Career"],
    },
    {
      title: "5 most in-demand jobs in 2022",
      cardInfo:
        "Posuere ultricies nibh malesuada ut nunc sed mollis. Elementum nunc augue lectus malesuada.",
      img: manInSuit,
      dateOrTime: "14 Jan 2022",
      links: ["Jobs", "Career"],
    },
    {
      title: "My journey from a Future Hub user to Web Developer",
      cardInfo:
        "Vestibulum ut risus magna est. Dictum at vulputate sodales suspendisse lacinia lectus.",
      img: laptop,
      dateOrTime: "22 Dec 2021",
      links: ["Professional Development", "Programming"],
    },
    {
      title: "Want a winning CV? Try these 5 tips2",
      cardInfo:
        "Et, cras pellentesque eget lectus quis quam porta. Molestie dictumst at at tincidunt.",
      img: forHire,
      dateOrTime: "17 Jan 2022",
      links: ["Professional Development", "Career"],
    },
    {
      title: "5 most in-demand jobs in 2022x",
      cardInfo:
        "Posuere ultricies nibh malesuada ut nunc sed mollis. Elementum nunc augue lectus malesuada.",
      img: manInSuit,
      dateOrTime: "14 Jan 2022",
      links: ["Jobs", "Career"],
    },
    {
      title: "My journey from a Future Hub user to Web Developer2",
      cardInfo:
        "Vestibulum ut risus magna est. Dictum at vulputate sodales suspendisse lacinia lectus.",
      img: laptop,
      dateOrTime: "22 Dec 2021",
      links: ["Professional Development", "Programming"],
    },
  ];

  return (
    <Layout user={user}>
      <ListContainer title="Article" cards={cards} />
    </Layout>
  );
};

export default Home;
