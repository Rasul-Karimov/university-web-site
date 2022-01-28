import React from "react";
import "./NewssItem.css";
import { Link } from "react-router-dom";
const NewsItem = (props) => {
  return (
    <div className="newsSection__items">
      {props.title ? (
        <div className="news__items items-news">
          <div className="items-news__data">
            <div className="items-news__month">
              {props.month ? props.month : null}
            </div>
            <div className="items-news__day">
              {props.day ? props.day : null}
            </div>
          </div>
          <div className="items-news__title">
            {props.title ? props.title : null}
          </div>
          <div className="items-news__text">
            {props.text ? props.text : null}
          </div>
          {props.href ? (
            <Link className="items-news__more-btn" to={props.href}>
              Подробнее
            </Link>
          ) : null}
        </div>
      ) : null}
      {props.new
        ? props.new.map((item) => {
            return (
              <div className="news__items items-news">
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
                  <Link className="items-news__more-btn" to={item.href}>
                    Подробнее
                  </Link>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default NewsItem;
