import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default class ContactForm extends React.Component {
  render() {
    return (
      <form className="contacto">
        <div>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Asunto" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="5" placeholder="Mensaje"></textarea>
          <button><FA icon={['far', "envelope"]} /></button>
        </div>

        <style jsx>{`
          .contacto {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          input, textarea, button {
            outline: none;
            cursor: pointer;
            border-radius: 5px;
          }

          button {
            padding: 10px 8px;
            border: 0 none;
            color: #fff;
            height: 57px;
            background-color: var(--green);
            transition: all .2s;
            font-size: 24pt;
            font-weight: bold;
            box-shadow: inset 0 12px 19px rgba(255,255,255,.1), 0 1px 7px rgba(0,0,0,.2);
            margin: 2px 5px;
            width: calc(90% + 19px);

            &:hover {
              filter: brightness(85%);
            }
          }

          input, textarea {
            width: 90%;
            margin: 5px;
            padding: 20px 8px;
            border: 1px solid #e8e8e8;
            font-family: 'Open Sans', sans-serif;
            font-size: 13px;
            color: var(--black);
            box-shadow: #ececec 0 1px 4px inset, #f8f8f8 -5px -5px 0 0, #f8f8f8 5px 5px 0 0, #f8f8f8 5px 0 0 0, #f8f8f8 0 5px 0 0, #f8f8f8 5px -5px 0 0, #f8f8f8 -5px 5px 0 0;
          }

          textarea {
            height: 87px;
          }
        `}</style>
      </form>
    )
  }
}