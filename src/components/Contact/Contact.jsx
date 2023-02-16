import React from "react";
import Title from "../Title/Title";

const Contact = (props) => {
  const { text } = props;
  return (
    <section className="contact" id="contact">
      <Title
        text={text.sectionContact}
      />
      <div className="contact__box">
        <p className="contact__text">{text.contactParagraph}</p>
        <ul className="contact__items">
          <li className="contact__item">
            <a href="https://t.me/dfurtsev" className="contact__item-link" target="_blank" rel="noreferrer">t.me/dfurtsev</a>
          </li>
          <li className="contact__item">
            <a href="mailto:furtz34@yandex.ru" className="contact__item-link">furtz34@yandex.ru</a>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Contact;
