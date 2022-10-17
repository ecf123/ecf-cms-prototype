import Layout from "../../components/Layout/Layout";
import LessonList from "../../containers/LessonList/LessonList"



const Home = () => {

  const dataJSON = [
    {
      id: "kjsvswkvfsihvds",
      challenges: [
        {
          duration: "15 minutes",
          type: "assignment",
        },
        {
          duration: "1 hrs",
          type: "assignment",
        },
      ],
      lessons: [
        {
          duration: "15 minutes",
          type: "Video",
        },
        {
          duration: "10 minutes",
          type: "Video",
        },
        {
          duration: "15 minutes",
          type: "Video",
        },
      ],
      title: "Halifax",
      name: "Halifax as provider",
    },
    {
      id: "fsdfsdfdghsfghs",
      challenges: [
        {
          duration: "30 minutes",
          type: "assignment",
        },
        {
          duration: "2 hrs 20 minutes",
          type: "assignment",
        },
      ],
      lessons: [
        {
          duration: "25 minutes",
          type: "Video",
        },
        {
          duration: "10 minutes",
          type: "Video",
        },
        {
          duration: "15 minutes",
          type: "Video",
        },
      ],
      title: "Barclays",
      name: "Barclays as provider",
    },
  ];
  

  return <Layout>
    <LessonList dataJSON={dataJSON}
     />
  </Layout>;
};

export default Home;
