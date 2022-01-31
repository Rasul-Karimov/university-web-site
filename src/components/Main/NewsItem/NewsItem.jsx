import React from "react";
import "./NewssItem.css";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
const NewsItem = (props) => {
  return (
    <>
      {props.newsMain
        ? props.newsMain.map((item, index) => {
            if (index < 3) {
              return (
                <div key={props.href} className="news__items items-news">
                  <div className="items-news__data">
                    <div className="items-news__month">
                      {item.month ? item.month : null}
                    </div>
                    <div className="items-news__day">
                      {item.day ? item.day : null}
                    </div>
                  </div>
                  <div className="items-news__title">
                    {item.title ? item.title : null}
                  </div>
                  <div className="items-news__text">
                    {item.text ? item.text : null}
                  </div>
                  {item.href ? (
                    <Buttons
                      to={item.href}
                      title="подробнее"
                      class="items-news__more-btn"
                    />
                  ) : null}
                </div>
              );
            }
          })
        : null}
      {props.new
        ? props.new.map((item) => {
            return (
              <div key={props.href} className="news__items items-news">
                <div className="items-news__data">
                  <div className="items-news__month">
                    {item.month ? item.month : null}
                  </div>
                  <div className="items-news__day">
                    {item.day ? item.day : null}
                  </div>
                </div>
                <div className="items-news__title">
                  {item.title ? item.title : null}
                </div>
                <div className="items-news__text">
                  {item.text ? item.text : null}
                </div>
                {item.href ? (
                  <Buttons
                    to={item.href}
                    title="подробнее"
                    class="items-news__more-btn"
                  />
                ) : null}
              </div>
            );
          })
        : null}
    </>
  );
};

export default NewsItem;
