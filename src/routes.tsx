import { createBrowserRouter } from "react-router-dom";
import GamesDescription from "./pages/GamesDescription";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Error from "./pages/Error";

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
