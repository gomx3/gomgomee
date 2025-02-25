import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../app/page";

const gomgomeeRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default function GomgomeeRouter() {
  return <RouterProvider router={gomgomeeRouter} />;
}
