import Layout from "../../components/Layout/Layout";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import Barclays from "../../assets/barclays-icon-white-background.svg";
import Airbnb from "../../assets/airbnb-logo.svg";
import { useState } from "react";


// const data = [{
//       key: 1,
//       id: dataJson.id,
//       course_name: `Commercial Banking + ${1}`,
//       course_provider: "Barclays",
//       no_of_lessons: `23`,
//       no_of_assignments: `2`,
//       course_length: `345 mins`,
//       students_enrolled: 124,
//     },
//     {
//       key: 2,
//       id: 2,
//       // course_name: `Commercial Banking + ${2}`,
//       course_provider: "Barclays",
//       no_of_assignments: `2`,
//       course_length: `345 mins`,
//       students_enrolled: 124,
//     }
//   ];

  const data = [];
for (let i = 0; i < 40; i++) {
  data.push({
    key: i,
    id: i,
    pathway_name: `Financial Forest + ${i}`,
    providers: [
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
      Barclays,
      Airbnb,
    ],
    no_of_courses: `8`,
    no_of_lessons: `8`,
    est_completion_time: `20hrs`,
    no_enrolled: 32,
    category: [`management + ${i}`, "developer", "banking"],
  });
}

// for (let i = 0; i < 5; i++) {
//   data.push({
//     key: i,
//     id: i,
//     course_name: `Commercial Banking + ${i}`,
//     course_provider: "Barclays",
//     no_of_lessons: `23`,
//     no_of_assignments: `2`,
//     course_length: `345 mins`,
//     students_enrolled: 124,
//   });
// }

const Home = () => {
  return <Layout></Layout>;
};

export default Home;
