import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignIn from "./Components/signin";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import AuthProvider from "./Provider/AuthProvider";
import Users from "./Components/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path:'users',
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:5000/users')
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
