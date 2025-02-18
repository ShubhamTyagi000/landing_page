import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from './Layout.jsx';
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: < Layout />,
    children: [
      { index: true, element: <Home /> },
      {path: 'about', element: <About />}
    ]
  
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
