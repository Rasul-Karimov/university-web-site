import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Department from "./More/Department/Department";
import Content from "./Content/Content";
import Collage from "./More/Collage/Collage";
import About from "./About/About";
import NewsSection from "./NewsSection/NewsSection";
import Administration from "./Administration/Administration";
import Whywe from "./WhyWe/WhyWe";
import Activists from "./activists/Activists";
import Contacts from "./Contacts/Contacts";
import Header from "../Header/Header";
import { NewsProvider } from "./NewsContext/NewsContext";

import img1 from "../../img/Новости/img1.png";
import img2 from "../../img/Новости/img2.png";
import img3 from "../../img/Новости/img3.png";
import img4 from "../../img/Новости/img4.png";
import img5 from "../../img/Новости/img5.png";
import img6 from "../../img/Новости/img6.png";
import img7 from "../../img/Новости/img7.png";
import img8 from "../../img/Новости/img8.png";
import img9 from "../../img/Новости/img9.png";
import img10 from "../../img/Новости/img10.png";
import img11 from "../../img/Новости/img11.png";
import img12 from "../../img/Новости/img12.png";
import img13 from "../../img/Новости/img13.png";
import img14 from "../../img/Новости/img14.png";
import NewMore from "./NewMore/NewMore";

function Main() {
  return (
    <NewsProvider>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/department" element={<Department />} />
        <Route path="/collage" element={<Collage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/students" element={<Activists />} />
        <Route path="/whywe" element={<Whywe />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/news1"
          element={
            <NewMore
              title="Hello"
              text="   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores voluptates, atque non, porro inventore possimus incidunt deserunt provident doloribus ratione sequi? In assumenda ea aut tempore error molestiae voluptates!"
              img={img1}
            />
          }
        />
      </Routes>
    </NewsProvider>
  );
}

export default Main;
