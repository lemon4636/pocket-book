import React from "react";
import { createHashRouter, redirect, Navigate } from "react-router-dom";
import Auth from "@/components/Auth";
import Lazy from "@/components/Lazy";

const App = React.lazy(() => import("../App"));
const PocketBook = React.lazy(() => import("../pages/PocketBook"));

export default function getRouter(options) {
  return createHashRouter(
    [
      {
        path: "/",
        loader: () => redirect("Home"),
      },
      {
        path: "/Home",
        element: (
          // <Auth>
            <Lazy>
              <App />
            </Lazy>
          // </Auth>
        ),
        children: [
          {
            index: true,
            loader: () => redirect("PocketBook"),
          },
          {
            path: "PocketBook",
            element: (
              <Lazy>
                <PocketBook />
              </Lazy>
            ),
          },
        ],
      },
    ],
    options
  );
}
