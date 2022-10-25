import CourseListContainer from "../../containers/CourseListContainer/CourseListContainer";


const CourseList = () => {
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
      provider: "Halifax"
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
      name: "Commercial Banking",
      provider: "Barclays"

    },
  ];
  return (
    <CourseListContainer dataJSON={dataJSON} />
  )
}

export default CourseList