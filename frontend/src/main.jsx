import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home, Register, Modules, Sponsors } from "./pages"
import {About_us} from "./pages/About"


import './index.css'
import App from './App.jsx'
import ModulePage from "./pages/ModulePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about-us",
        element: <About_us />,
      },
      {
        path: "/modules",
        element: <Modules />,
      },
      {
        path: "/sponsors",
        element: <Sponsors />,
      },
      {
        path: "/modules/:moduleId",
        element: <ModulePage />,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
