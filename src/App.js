import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Header,
  Body,
  WatchSection,
  Main,
  VideoSection,
  ResultSection,
  SearchPage,
} from "./components";

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
          {
            path: "/watch/:id",
            element: <WatchSection />,
          },
        ],
      },
    ],
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
