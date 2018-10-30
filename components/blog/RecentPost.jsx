import React from 'react';

export default class extends React.Component {
  render () {
    const { title, thumbnail, createdAt } = this.props;

    return (
      <div className="recent-post">
        <a href="#" className="photo"><img src={ thumbnail } /></a>
        <a href="#">{ title }</a>
        <span>{ createdAt }</span>

         <style jsx>{`
          .recent-post {
            display: grid;
            grid-template-areas: "photo title"
                                 "photo date";
            grid-template-columns: minmax(auto, 60px) 1fr;
            column-gap: 15px;
            margin-bottom: 15px;
          }
          .recent-post .photo {
            grid-area: photo;
          }
          .recent-post .photo img {
            display: block;
            max-width: 100%;
            width: 100%;
            border-radius: 50%;
          }
          .recent-post a {
            grid-area: title;
            margin: 0;
            font-size: 14px;
            font-weight: bold;
            line-height: 17px;
          }
          .recent-post a:hover {
            color: var(--green);
            filter: brightness(85%);
          }
          .recent-post span { 
            grid-area: date;
            color: #8f8f8f;
            font-size: 13px;
            margin-top: 6px;
          }
          a {
            text-decoration: none;
            color: var(--green);
            font-size: 15px;
          }
          @media screen and (max-width:790px) {

            .recent-post {
              grid-template-columns: minmax(auto, 50px) 1fr;
            }
          }
        `}</style>
      </div>
    )
  }
}