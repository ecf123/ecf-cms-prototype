import LessonContentPreview from "../../components/LessonContentPreview/LessonContentPreview";

const Home = () => {

  const lessons = [
    {
      title: "Test",
      content: "longer text test" 
    },
    {
      title: "Test2",
      content: "longer text test2" 
    }
  ]

  return <LessonContentPreview lessonsArray={lessons}/>;


};

export default Home;
