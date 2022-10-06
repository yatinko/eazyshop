import Router from "./router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
