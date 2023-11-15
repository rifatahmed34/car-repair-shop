import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Login from "./Components/Page/Login";
import Register from "./Components/Page/Register";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import CheckOut from "./Components/CheckOut/CheckOut";
import Book from "./Components/CheckOut/Book";
import Privet from "./Components/AuthProvider/Privet";
import About from "./Components/Page/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: '/checkout/:id',
          element: <Privet><CheckOut></CheckOut></Privet>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/booking',
          element: <Privet><Book></Book></Privet>
        },
        {
          path: '/about', 
          element: <About></About>
        }
        
      ]
    },
  ]);
  export default router;