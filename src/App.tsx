import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/projects/:projectId", element: <ProjectPage /> },
]);

const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  document.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  });
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
      <div
        className={`upBtn ${showBtn ? "active" : ""}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <MdKeyboardDoubleArrowUp />
      </div>
    </>
  );
};

export default App;
