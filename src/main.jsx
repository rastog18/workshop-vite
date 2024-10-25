import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import DemoPage from "./pages/demoPage.jsx";
import "./index.css";
import Home from "./Home.jsx";
import Example from "./pages/example.jsx";
import PradyunTPage from "./pages/PradyunTPage.jsx";
=======
import DemoPage from './pages/demoPage.jsx'
import RonaldPage from './pages/RonaldPage.jsx'
import MatthewPage from './pages/MatthewPage'
import ShivamPage from './pages/shivamPage.jsx';
import Mihika from "./pages/Mihika.jsx";
import './index.css'
import Home from './Home.jsx'
import Example from './pages/example.jsx';
>>>>>>> b3d378d6ac212a448fcebda2b8e553a839a379ec

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/demo" element={<DemoPage />} />
<<<<<<< HEAD
=======
        <Route path="/mihika" element={<Mihika />} />
>>>>>>> b3d378d6ac212a448fcebda2b8e553a839a379ec
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
<<<<<<< HEAD
    case "Person1":
      return <DemoPage />;
    case "Person2":
      return <DemoPage />;
    case "Person3":
      return <DemoPage />;
    case "Person4":
      return <DemoPage />;
    case "Pradyun Tandra":
      return <PradyunTPage />;
=======
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
>>>>>>> b3d378d6ac212a448fcebda2b8e553a839a379ec
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
