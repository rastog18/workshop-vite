import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import DemoPage from "./pages/demoPage.jsx";
import "./index.css";
import RonaldPage from "./pages/RonaldPage.jsx";
import MatthewPage from "./pages/MatthewPage";
import Home from "./Home.jsx";
import Example from "./pages/example.jsx";
import Mihika from "./pages/Mihika.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/mihika" element={<Mihika />} />
        <Route path="/profile/:name" element={<ProfileRouter />} />
      </Routes>
    </Router>
  </StrictMode>
);

function ProfileRouter() {
  const { name } = useParams();

  switch (name) {
    case "Ryan(Demo)":
      return <DemoPage />;

    // Change <DemoPage /> to your custom profile page, and change the case to your name
    case "Person1":
      return <DemoPage />;
    case "Ronald Tsai":
      return <RonaldPage />;
    case "Matthew":
      return <MatthewPage />;
    case "Mihika":
      return <Mihika />;
    case "Person5":
      return <DemoPage />;
    case "Person6":
      return <DemoPage />;
    case "Person7":
      return <DemoPage />;
    case "Person8":
      return <DemoPage />;
    case "Person9":
      return <DemoPage />;
    case "Person10":
      return <DemoPage />;
    default:
      return <div>Profile not found</div>;
  }
}
