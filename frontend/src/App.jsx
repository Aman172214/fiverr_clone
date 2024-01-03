import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Gigs from "./pages/Gigs";
import Gig from "./pages/Gig";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Messages from "./pages/Messages";
import Message from "./pages/Message";
import MyGigs from "./pages/MyGigs";
import Orders from "./pages/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const RootLayout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
