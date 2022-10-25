import Layout from "../../components/Layout/Layout";
import CourseOverview from "../../containers/CourseOverview/CourseOverview";
import ViewOptions from "../../components/ViewOptions/ViewOptions"
const Home = () => {
  const collection = [
    {
      id: "SzU0K6UsKoU0zCgcTWR",
      challenges: [
        {
          duration: "15 minutes",
          id: "",
          title: "Multiple Choice Quiz",
          type: "assignment",
        },
        {
          duration: "1 hrs",
          title: "Module Assignment",
          type: "assignment",
          description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
          id: "SzU0K6AUsKoU0zCgcTWR",
          image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15",
        },
      ],
      lessons: [
        {
          duration: "15 minutes",
          id: "yHLpjd8Xh1UCW0TBvo1s",
          title: "The Role of Banking and the Financial System",
          type: "Video",
        },
        {
          duration: "10 minutes",
          id:"9jB1AoV6HZGUXLK1SJSP",
          title: "Currency Risk Management",
          type: "Video",
        },
        {
          duration: "15 minutes",
          id:"IS8uVBzqXD3kDkbPWbeV",
          title: "Equity, Assets & Liabilities",
          type: "Video",
        },
      ],
      title: "Halifax",
      name: "An Introduction to Interest",
      provider: "halifax"
    },
    {
      id: "YWe9KBdxroQZXt5MdNaz",
      challenges: [
        {
          duration: "15 minutes",
          id: "",
          title: "Multiple Choice Quiz",
          type: "assignment",
        },
        {
          duration: "1 hrs",
          title: "Module Assignment",
          type: "assignment",
          description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
          id:"YWe9KBdxroQZXt5MdNaz",
          image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15",
        },
      ],
      lessons: [
        {
          duration: "15 minutes",
          id: "yHLpjd8Xh1UCW0TBvo1s",
          title: "The Role of Banking and the Financial System",
          type: "Video",
        },
        {
          duration: "10 minutes",
          id:"9jB1AoV6HZGUXLK1SJSP",
          title: "Currency Risk Management",
          type: "Video",
        },
        {
          duration: "15 minutes",
          id:"IS8uVBzqXD3kDkbPWbeV",
          title: "Equity, Assets & Liabilities",
          type: "Video",
        },
      ],
      title: "barclays",
      name: "Commercial Banking",
      provider: "barclays"
    },
    {
    id: "fDguEVnScWPOVWMG2pKT",
    challenges: [
      {
        duration: "15 minutes",
        id: "",
        title: "Multiple Choice Quiz",
        type: "assignment",
      },
      {
        duration: "1 hrs",
        title: "Module Assignment",
        type: "assignment",
        description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
        id:"fDguEVnScWPOVWMG2pKT",
        image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15"
      },
    ],
    lessons: [
      {
        duration: "15 minutes",
        id: "yHLpjd8Xh1UCW0TBvo1s",
        title: "The Role of Banking and the Financial System",
        type: "Video",
      },
      {
        duration: "10 minutes",
        id:"9jB1AoV6HZGUXLK1SJSP",
        title: "Currency Risk Management",
        type: "Video",
      },
      {
        duration: "15 minutes",
        id:"IS8uVBzqXD3kDkbPWbeV",
        title: "Equity, Assets & Liabilities",
        type: "Video",
      },
    ],
    title: "goldman sachs",
    name: "An Introduction to Investing",
    provider: "goldman sachs"
  },
  {
    id: "IUsV6m1IqdfNeJEwGGyU",
    challenges: [
      {
        duration: "15 minutes",
        id: "",
        title: "Multiple Choice Quiz",
        type: "assignment",
      },
      {
        duration: "1 hrs",
        title: "Module Assignment",
        type: "assignment",
        description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
        id: "lUsV6m1lqdfNeJEwGGyU",
        image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15",
      },
    ],
    lessons: [
      {
        duration: "15 minutes",
        id: "yHLpjd8Xh1UCW0TBvo1s",
        title: "The Role of Banking and the Financial System",
        type: "Video",
      },
      {
        duration: "10 minutes",
        id:"9jB1AoV6HZGUXLK1SJSP",
        title: "Currency Risk Management",
        type: "Video",
      },
      {
        duration: "15 minutes",
        id:"IS8uVBzqXD3kDkbPWbeV",
        title: "Equity, Assets & Liabilities",
        type: "Video",
      },
    ],
    title: "santander",
    name: "An Introduction to Capital",
    provider: "santander"
  },
  {
    id: "qK4iErIvIsSNm18xxQIh",
    challenges: [
      {
        duration: "15 minutes",
        id: "",
        title: "Multiple Choice Quiz",
        type: "assignment",
      },
      {
        duration: "1 hrs",
        title: "Module Assignment",
        type: "assignment",
        description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
        id: "qK4iErlvIsSNm18xxQlh",
        image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15"
      },
    ],
    lessons: [
      {
        duration: "15 minutes",
        id: "yHLpjd8Xh1UCW0TBvo1s",
        title: "The Role of Banking and the Financial System",
        type: "Video",
      },
      {
        duration: "10 minutes",
        id:"9jB1AoV6HZGUXLK1SJSP",
        title: "Currency Risk Management",
        type: "Video",
      },
      {
        duration: "15 minutes",
        id:"IS8uVBzqXD3kDkbPWbeV",
        title: "Equity, Assets & Liabilities",
        type: "Video",
      },
    ],
    title: "halifax",
    name: "An Introduction to Accounting",
    provider: "halifax"
  },
  {
    id: "ylzrLBO1sWQO1sLo0mNr",
    challenges: [
      {
        duration: "15 minutes",
        id: "",
        title: "Multiple Choice Quiz",
        type: "assignment",
      },
      {
        duration: "1 hrs",
        title: "Module Assignment",
        type: "assignment",
        description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
        id: "ylzrLBO1sWQO1sLo0mNr",
        image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15"
      },
    ],
    lessons: [
      {
        duration: "15 minutes",
        id: "yHLpjd8Xh1UCW0TBvo1s",
        title: "The Role of Banking and the Financial System",
        type: "Video",
      },
      {
        duration: "10 minutes",
        id:"9jB1AoV6HZGUXLK1SJSP",
        title: "Currency Risk Management",
        type: "Video",
      },
      {
        duration: "15 minutes",
        id:"IS8uVBzqXD3kDkbPWbeV",
        title: "Equity, Assets & Liabilities",
        type: "Video",
      },
    ],
    title: "hsbc",
    name: "Welcome to HSBC",
    provider: "hsbc"
  },
  {
    id: "zoYyatJhKNo18hy0XJcX",
    challenges: [
      {
        duration: "15 minutes",
        id: "",
        title: "Multiple Choice Quiz",
        type: "assignment",
      },
      {
        duration: "1 hrs",
        title: "Module Assignment",
        type: "assignment",
        description: "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
        id: "zoYyatJhKNo18hy0XJcX",
        image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15"
      },
    ],
    lessons: [
      {
        duration: "15 minutes",
        id: "yHLpjd8Xh1UCW0TBvo1s",
        title: "The Role of Banking and the Financial System",
        type: "Video",
      },
      {
        duration: "10 minutes",
        id:"9jB1AoV6HZGUXLK1SJSP",
        title: "Currency Risk Management",
        type: "Video",
      },
      {
        duration: "15 minutes",
        id:"IS8uVBzqXD3kDkbPWbeV",
        title: "Equity, Assets & Liabilities",
        type: "Video",
      },
    ],
    title: "play",
    name: "An Introduction to E.C.F.",
    provider: "ecf"
  }];
  return (
    <Layout>
      <ViewOptions selectedOption={"Overview"}/>
      <CourseOverview dataJSON={collection}/>
    </Layout>
  );
};
export default Home;