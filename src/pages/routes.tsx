import { createBrowserRouter } from "react-router-dom";
import GamesDescription from "./GamesDescription";
import HomePage from "./HomePage";
import Layout from "./Layout";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GamesDescription /> },
    ],
  },
]);

export default router;
