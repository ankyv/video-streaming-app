import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import WatchSection from "./components/WatchSection";
import Main from "./components/Main";
import VideoSection from "./components/VideoSection";
import ResultSection from "./components/ResultSection";

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
                element: <ResultSection />,
              },
            ],
          },
        ],
      },
      {
        path: "/watch/:id",
        element: <WatchSection />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
