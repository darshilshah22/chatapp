import React from "react";
import Chatpage from "./screens/Chatpage/Chatpage";
import Home from "./screens/Home/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import { Toaster } from "react-hot-toast";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chats",
      element: <Chatpage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
