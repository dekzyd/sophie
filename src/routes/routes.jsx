import { createBrowserRouter } from "react-router-dom";
import { HomeLayout, FlexDollar, FlexNaira, HomePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <p>There was an error</p>,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <p>There was an error</p>,
      },
      {
        path: "flex-dollar",
        element: <FlexDollar />,
        errorElement: <p>There was an error</p>,
      },
      {
        path: "flex-naira",
        element: <FlexNaira />,
        errorElement: <p>There was an error</p>,
      },
    ],
  },
]);

export default router;
