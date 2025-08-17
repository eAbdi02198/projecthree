import Home from "./pages/Home";
import About from "./pages/About";

import Article from "./pages/Article";
import Panel from "./pages/Panel";
import Course from "./pages/Course"; // 👈 کامپوننت دوره



import JavaScript from "./pages/JavaScript";
import Css from "./pages/Css";

import Reacti from "./pages/Reacti";

const routesi = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/article/*",
    element: <Article />,
    children: [
      { path: "", element: <div>لطفاً یکی از مقاله‌ها را انتخاب کنید</div> },
      { path: "js", element: <JavaScript /> },
      { path: "css", element: <Css /> },
      { path: "react", element: <Reacti /> },
    ],
  },
  {
    path: "/panel",
    element: <Panel />,
  },
  {
    path: "/course/:id",
    element: <Course />,
  },
];

export default routesi;
