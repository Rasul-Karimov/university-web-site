import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Department from "./More/Department/Department";
import Content from "./Content/Content";
import Collage from "./More/Collage/Collage";
import About from "./About/About";
import NewsSection from "./NewsSection/NewsSection";
import Administration from "./Administration/Administration";
import Students from "./Students/Students";
import Whywe from "./WhyWe/WhyWe";
import Activists from "./activists/Activists";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/department" element={<Department />} />
        <Route path="/collage" element={<Collage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/students" element={<Activists />} />
        <Route path="/whywe" element={<Whywe />} />
      </Routes>
    </Router>
  );
}

export default Main;
