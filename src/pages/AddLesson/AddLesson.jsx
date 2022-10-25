import "./AddLesson.scss";
import AddLessonContainer from "../../containers/AddLessonContainer/AddLessonContainer";
import Layout from "../../components/Layout/Layout";
import profile from "../../assets/profile-picture.svg"

const AddLesson = () => {

    const user = {
        image: profile,
        name: "Brett Zieme",
        role: "Admin",
      };


  return (
    <div>
    <Layout user={user}>
    <AddLessonContainer />
    </Layout>
</div>
  )
}

export default AddLesson
