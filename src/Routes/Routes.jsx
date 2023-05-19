import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Page/Home/Home";
import ErrorPage from "../components/Page/ErrorPage/ErrorPage";
import Login from "../components/Page/Login/Login";
import Register from "../components/Page/Register/Register";
import Blog from "../components/Page/Blog/Blog";
import AllToys from "../components/Page/AllToys/AllToys";
import MyToys from "../components/Page/MyToys/MyToys";
import AddToy from "../components/Page/AddToy/AddToy";
import ToyDetails from "../components/Page/ToyDetails/ToyDetails";

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
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/alltoys')
      },
      {
        path: "/my-toy",
        element: <MyToys></MyToys>
      },
      {
        path: "/add-toy",
        element: <AddToy></AddToy>
      },
      {
        path: "/toydetails/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

export default router;