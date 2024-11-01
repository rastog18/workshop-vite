import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import Example from "./pages/example.jsx";
import PradyunTPage from "./pages/PradyunTPage.jsx";
import DemoPage from './pages/demoPage.jsx'
import RonaldPage from './pages/RonaldPage.jsx'
import MatthewPage from './pages/MatthewPage'
import ShivamPage from './pages/shivamPage.jsx';
import Mihika from "./pages/Mihika.jsx";
import AaryanPage from "./pages/aaryanPage.jsx";

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
    case "Person2":
      return <DemoPage />;
    case "Person3":
      return <DemoPage />;
    case "Aaryan Bondre":
      return <AaryanPage />;
    case "Pradyun Tandra":
      return <PradyunTPage />;
    case "Shivam":
      return <ShivamPage />;
    case "Ronald Tsai":
      return <RonaldPage />;
    case "Matthew":
      return <MatthewPage />;
    case "Mihika":
      return <Mihika />;
    case "Person5":
      return <DemoPage />;

    default:
      return <div>Profile not found</div>;
  }
}
