import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ProjectPage from "./components/ProjectPage/ProjectPage";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/projects/:projectId", element: <ProjectPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
