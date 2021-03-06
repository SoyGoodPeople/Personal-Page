import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default class SocialIcon extends React.Component {
  render() {
    const { color, url, icon } = this.props;

    return (
      <a href={url} target="_blank" rel="noopener" aria-label={icon}>
        <FA icon={['fab', icon]} />

        <style jsx>{`
          a {
            font-size: 25pt;
            cursor: pointer;
            z-index: 1;
            border-radius: 5px;
            transition: all .3s ease;
            will-change: background-color, color;
            margin: 0 8px;
            padding: 0 8px;

            &:hover {
              background-color: ${ color };
              color: #fff !important;
              
              :global(svg) {
                animation: topToBottom .3s forwards;
              }
            }
          }

          @keyframes topToBottom {
              49% {
                transform: translateY(100%); 
              }
              50% {
                opacity: 0;
                transform: translateY(-100%); 
              }
              51% {
                opacity: 1; 
              }
          }
        `}</style>
      </a>
    )
  }
} 