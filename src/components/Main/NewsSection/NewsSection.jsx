import React from "react";
import "./NewsSection.css";
import NewsItem from "../NewsItem/NewsItem";
import { useContext } from "react";
import { NewsContext } from "../NewsContext";
import img1 from "../../../img/Новости/img1.png";
import img2 from "../../../img/Новости/img2.png";
import img3 from "../../../img/Новости/img3.png";
import img4 from "../../../img/Новости/img4.png";
import img5 from "../../../img/Новости/img5.png";
import img6 from "../../../img/Новости/img6.png";
import img7 from "../../../img/Новости/img7.png";
import img8 from "../../../img/Новости/img8.png";
import img9 from "../../../img/Новости/img9.png";
import img10 from "../../../img/Новости/img10.png";
import img11 from "../../../img/Новости/img11.png";
import img12 from "../../../img/Новости/img12.png";
import img13 from "../../../img/Новости/img13.png";
import img14 from "../../../img/Новости/img14.png";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
const NewsSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const news = useContext(NewsContext);
  return (
    <div className="newsSection">
      <div className="newsSection__container container">
        <div className="newsSection__title title">Новости</div>
        <div className="newsSection__items">
          <NewsItem new={news} />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
