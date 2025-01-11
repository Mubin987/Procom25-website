import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home, Register, AboutUs, Modules, Sponsors } from "./pages"
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
        element: <AboutUs />,
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
