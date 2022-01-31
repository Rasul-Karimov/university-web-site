import React from "react";
import NewsItem from "../../NewsItem/NewsItem";
import "./news.css";
import { NavLink } from "react-router-dom";
import Buttons from "../../Buttons/Buttons";
import { useContext } from "react";
import { NewsContext } from "../../NewsContext";
const News = () => {
  const newsMain = useContext(NewsContext);
  return (
    <div className="news">
      <div className="news__container container">
        <div className="news__title title">Последние Новости & Объявления</div>
        <div className="news__block">
          <NewsItem newsMain={newsMain} />
        </div>
        <Buttons className="news__button" to="/news" title="Все новости" />
      </div>
    </div>
  );
};

export default News;
