import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  AOS.init();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_q3pv0fb",
      "template_6io28ge",
      form.current,
      "FRDnuUIsk94NF8jjU"
    );
    e.target.reset();
  };
  return (
    <section id="contact" data-aos='fade-in' data-aos-duration='1500'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ymayank501@gmail.com</h5>
            <a href="mailto:ymayank501@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Mayank Yadav</h5>
            <a href="https://www.linkedin.com/in/mayank-yadav-93661416b/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+918527541628</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+918527541628"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
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
