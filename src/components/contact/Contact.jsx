import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const blank = "_blank";

const Contact = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const form = useRef();

  const changeEmailInput = (e) => {
    setEmailInput(emailInput.value);
  };
  const changeNameInput = (e) => {
    setNameInput(nameInput.value);
  };
  const changeTextInput = (e) => {
    setTextInput(textInput.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gvrdwg7",
        "template_4auaz4m",
        form.current,
        "BS8FnM2EAwB8buGPI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmailInput("");
    setNameInput("");
    setTextInput("");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lucasluzzani@gmail.com</h5>
            <a href="mailto:lucasluzzani@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>luzzanilucas</h5>
            <a href="https://m.me/luzzanilucas" target={blank}>
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+11-2463-1919</h5>
            <a href="https://wa.me/5491124631919" target={blank}>
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            onChange={changeNameInput}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={nameInput}
          />
          <input
            onChange={changeEmailInput}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={emailInput}
          />
          <textarea
            onChange={changeTextInput}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            value={textInput}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
