import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/homepage";
import ExerciseDetails from "./pages/exerciseDetails";
import Layout from "./components/Layout"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="home" /> },
      { path: "home", element: <Home /> }, 
      { path: "exercise/:id", element: <ExerciseDetails /> }, 
    ],
  },
]);
