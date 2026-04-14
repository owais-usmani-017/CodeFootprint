import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CodeFootprint from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";


function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={< CodeFootprint />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
