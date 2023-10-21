import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Header,
  Body,
  ChannelPage,
  ExplorePage,
  WatchPage,
  Main,
  VideoPage,
  ResultSection,
  SearchPage,
  PlaylistPage,
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
                element: <VideoPage />,
              },
              {
                path: "/results/:searchQuery",
                element: <ResultSection />,
              },
            ],
          },
          {
            path: "/watch/:id",
            element: <WatchPage />,
          },
          {
            path: "/watch/:id/:playlistId/:index",
            element: <WatchPage />,
          },
          {
            path: "/playlist/:id",
            element: <PlaylistPage />,
          },
          {
            path: "/channel/:channelId",
            element: <ChannelPage />,
          },
          {
            path: "/explore/:categoryId",
            element: <ExplorePage />,
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
