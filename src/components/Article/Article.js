import React from 'react';
import './Article.css';

function Article({ bgImg, title, author }) {
  return (
    <article className="article">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="service__bg"
      />
      <h4 className="article__title">{title}</h4>
      <p className="article__author">
        -
        {author}
      </p>
    </article>
  );
}

export default Article;
