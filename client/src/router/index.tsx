import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Demo1 from "@/components/Demo1";
import Demo2 from "@/components/Demo2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo1/>,
  },
  {
    path: "about",
    element: <Demo2/>,
  },
]);

export default router;