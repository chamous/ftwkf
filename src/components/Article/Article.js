import React from "react";
import "./Article.css";

const Article = ({ bgImg, title, author }) => {
  return (
    <article className="article">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="service__bg"
      ></div>
      <h4 className="article__title">{title}</h4>
      <p className="article__author">- {author}</p>
    </article>
  );
};

export default Article;
