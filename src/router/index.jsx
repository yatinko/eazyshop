import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import Home from "../views/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

export default Router;
