import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import VideoWatch from "./components/VideoWatch";
import Main from "./components/Main";
import VideoSection from "./components/VideoSection";
import ResultPage from "./components/ResultPage";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Main />,
            children: [
              {
                path: "/",
                element: <VideoSection />,
              },
              {
                path: "/results/:searchQuery",
                element: <ResultPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/watch/:id",
        element: <VideoWatch />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
