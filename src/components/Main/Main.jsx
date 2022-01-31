import { Routes, Route } from "react-router-dom";
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
import img1 from "../../img/Новости/img1.png";
import img2 from "../../img/Новости/img2.png";
import img3 from "../../img/Новости/img3.png";
import img5 from "../../img/Новости/img5.png";
import img6 from "../../img/Новости/img6.png";
import img7 from "../../img/Новости/img7.png";
import img8 from "../../img/Новости/img8.png";
import img9 from "../../img/Новости/img9.png";
import img10 from "../../img/Новости/img10.png";
import img12 from "../../img/Новости/img12.png";
import img13 from "../../img/Новости/img13.png";
import img14 from "../../img/Новости/img14.png";
import { NewsContext } from "./NewsContext/NewsContext";
import { useContext } from "react";
import NewMore from "./NewMore/NewMore";
function Main() {
  const newsPage = useContext(NewsContext);

  return (
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
        path={newsPage[0].href}
        element={
          <NewMore
            title={newsPage[0].title}
            text={newsPage[0].text2}
            img={img1}
          />
        }
      />
      <Route
        path={newsPage[1].href}
        element={
          <NewMore
            title={newsPage[1].title}
            text={newsPage[1].text2}
            img={img2}
          />
        }
      />
      <Route
        path={newsPage[2].href}
        element={
          <NewMore
            title={newsPage[2].title}
            text={newsPage[2].text2}
            img={img3}
          />
        }
      />
      <Route
        path={newsPage[3].href}
        element={
          <NewMore
            title={newsPage[3].title}
            text={newsPage[3].text2}
            img={img5}
          />
        }
      />
      <Route
        path={newsPage[4].href}
        element={
          <NewMore
            title={newsPage[4].title}
            text={newsPage[4].text2}
            img={img6}
          />
        }
      />
      <Route
        path={newsPage[5].href}
        element={
          <NewMore
            title={newsPage[5].title}
            text={newsPage[5].text2}
            img={img7}
          />
        }
      />
      <Route
        path={newsPage[6].href}
        element={
          <NewMore
            title={newsPage[6].title}
            text={newsPage[6].text2}
            img={img8}
          />
        }
      />
      <Route
        path={newsPage[7].href}
        element={
          <NewMore
            title={newsPage[7].title}
            text={newsPage[7].text2}
            img={img9}
          />
        }
      />
      <Route
        path={newsPage[8].href}
        element={
          <NewMore
            title={newsPage[8].title}
            text={newsPage[8].text2}
            img={img10}
          />
        }
      />
      <Route
        path={newsPage[9].href}
        element={
          <NewMore
            title={newsPage[9].title}
            text={newsPage[9].text2}
            img={img12}
          />
        }
      />
      <Route
        path={newsPage[10].href}
        element={
          <NewMore
            title={newsPage[10].title}
            text={newsPage[10].text2}
            img={img13}
          />
        }
      />
      <Route
        path={newsPage[11].href}
        element={
          <NewMore
            title={newsPage[11].title}
            text={newsPage[11].text2}
            img={img14}
          />
        }
      />
    </Routes>
  );
}

export default Main;
