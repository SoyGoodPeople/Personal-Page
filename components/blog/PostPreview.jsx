import React from 'react'
import { Link } from '../../routes';
import Like from '../widgets/Like';
import BlogMeta from './BlogMeta';

export default class extends React.Component { 
  render () {
    const { title, photo, summary, createdAt, commentQty, readingTime, likedQty, url } = this.props;

    return (
      <article>
        <Link route="post" params={{ post: url }} prefetch>
          <a><img src={ photo } className="post-img" alt={title}/></a>
        </Link>
        <div className="blog-data">
          <Like likedQty={likedQty} />
          <Link route="post" params={{ post: url }} prefetch>
            <a><h2>{ title }</h2></a>
          </Link>
          <BlogMeta createdAt={createdAt} commentQty={commentQty} readingTime={readingTime}/>
        </div>
        <p>
          { summary }
          <Link route="post" params={{ post: url }} prefetch>
            <a className="more-dots">…</a>
          </Link>
        </p>
        <Link route="post" params={{ post: url }} prefetch>
          <a className="view-more">Seguir Leyendo</a>
        </Link>

        <style jsx>{`
          article {
            padding-bottom: 35px;
            border-bottom: 1px dotted #ddd;
            margin-bottom: 40px;
          }
          .more-dots {
            text-decoration: none;
          }
          .view-more {
            padding: 8px 20px;
            background: none;
            border: 1px solid var(--green);
            color: var(--green);
            border-radius: 20px;
            cursor: pointer;
            transition: 0.1s ease-in;
          }
          .view-more:hover {
            background: var(--green);
            color: #fff;
          }
          .post-img {
            border-radius: 20px;
            width: 100%;
          }
          p {
            font-family: 'Charter';
            line-height: 24px;
            font-size: 17px;
            text-align: justify;
          }
          .blog-data {
            display: grid;
            grid-template-areas: "like title"
                                "like meta";
            grid-template-columns: minmax(auto, 50px) 1fr;
            margin-top: 20px;
            grid-column-gap: 10px;
          }
          .blog-data h2 {
            grid-area: title;
            margin-bottom: 5px;
            margin-top: 0;
            color: #000;
          }
          .blog-data h2:hover {
            color: var(--green);
          }
          a {
            text-decoration: none;
            color: var(--green);
            font-size: 15px;
          }
          @media screen and (max-width:700px) {
            .blog-data h2 {
              font-size: 1.3em;
            }
            p {
              line-height: 21px;
              font-size: 15px;
            }
            .view-more {
              padding: 6px 15px;
              font-size: 14px;
            }
          }
        `}</style>
      </article>
    )
  }
}