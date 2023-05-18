import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Page/Home/Home";
import ErrorPage from "../components/Page/ErrorPage/ErrorPage";
import Login from "../components/Page/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);

  export default router;