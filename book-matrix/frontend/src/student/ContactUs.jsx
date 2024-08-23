import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// npm i @emailjs/browser
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('bookmatrix', 'engineersurajsahani', form.current, {
        publicKey: 'HvVruA2ogbtnZ9EKK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="needs-validation" noValidate>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="from_name"
            className="form-control"
            placeholder="Your Name"
            required
          />
          <div className="invalid-feedback">
            Please provide your name.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="from_email"
            className="form-control"
            placeholder="Your Email"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            required
          />
          <div className="invalid-feedback">
            Please provide a subject.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="invalid-feedback">
            Please provide a message.
          </div>
        </div>
        <div className="d-grid">
          <input type="submit" value="Send" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};
