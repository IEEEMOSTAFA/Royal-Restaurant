import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Missing import
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import {router} from './Routes/Router.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

//  