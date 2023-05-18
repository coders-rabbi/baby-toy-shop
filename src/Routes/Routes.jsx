import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Page/Home/Home";
import ErrorPage from "../components/Page/ErrorPage/ErrorPage";
import Login from "../components/Page/Login/Login";
import Register from "../components/Page/Register/Register";
import Blog from "../components/Page/Blog/Blog";

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
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);

  export default router;