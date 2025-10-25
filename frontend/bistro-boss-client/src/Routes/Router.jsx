import { createBrowserRouter } from "react-router-dom";  // Changed from "react-router"
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Footer from "../Shared/Footer/Footer";
// import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            

        },
        {
            path: "contact",
            element: <h1>Contact Us</h1>,
        }
    ]
  },
]);