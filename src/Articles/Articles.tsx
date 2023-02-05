import React from 'react';
import { articles } from '../data/articles';
import "./Articles.scss";

const Articles = () => {
  return (
    <section className="blog" id="blog">
        <h2 className="blog__title">Latest Articles</h2>
        <div className="blog__card-group">
            {articles.map((data) => (
                <article className="articleCard">
                    <div className="articleCard__head">
                        <img src={data.image} alt="" className="card-img" />
                    </div>
                    <div className="articleCard__body">
                        <p className="author">By <a href="#">{data.author}</a></p>
                        <h3 className="title"><a href="#">{data.title}</a></h3>
                        <p className="text">{data.text}</p>
                    </div>
                </article>
            ))}
        </div>
    </section>
  )
}

export default Articles