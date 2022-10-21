import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout  from "./components/Layout/Layout";
import profile from "./assets/profile-picture.svg"

const App = () => {

  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };
 
  return (
    <>
    {/* loggedOut && 
    <Routes>
      <Route />
    </Routes> */}
    {
    <Layout user={user}>
      <Routes>
        <Route path="/" element={<Home/>} /> 

        <Route path="/pathways" element={<p>Pathways</p>}/>
        <Route path="/pathways/:pathwayName" element={<p>Pathway name</p>}/>
        <Route path="/:pathwayName/courses" element={<p>Courses</p>}/>
        <Route path="/:pathwayName/courses/list" element={<p>Courses list</p>}/>
        <Route path="/:courseName" element={<p>Course name</p>}/>
        <Route path="/:courseName/addlesson" element={<p>Add lesson</p>}/>
        <Route path="/:courseName/:lessonTitle" element={<p>Lesson title</p>}/>

        <Route path="/articles" element={<p>Articles</p>}/>
        <Route path="/:articleTitle" element={<p>Article title</p>}/>
        <Route path="/addarticle" element={<p>Add article</p>}/>

        <Route path="/marketplace" element={<p>Marketplace</p>}/>
        <Route path="/addprize" element={<p>Add prize</p>}/>
        <Route path="/:prizeName" element={<p>Prize name</p>}/>

        <Route path="/users" element={<p>Users</p>}/>
        <Route path="/settings" element={<p>Settings</p>}/>
        

      </Routes>
    </Layout>
   /* && loggedIn */}
   </>
  );
};

export default App;