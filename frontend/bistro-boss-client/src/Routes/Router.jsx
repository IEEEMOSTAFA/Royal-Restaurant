import { createBrowserRouter } from "react-router-dom";  // Changed from "react-router"
import Main from "../Layout/Main";
// import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "about",
            element: <h1>About Us</h1>,

        },
        {
            path: "contact",
            element: <h1>Contact Us</h1>,
        }
    ]
  },
]);