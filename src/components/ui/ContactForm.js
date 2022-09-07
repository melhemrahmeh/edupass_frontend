import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const notify = () => toast.success(`Message sent successfully!`);

  const addNewContactForm = async (e) => {
    e.preventDefault();
    const form = {
      name,
      email,
      phoneNumber,
      subject,
      message,
    };
    console.log(form);
    await axios({
      method: "POST",
      url: "https://edupass-rest-apis.herokuapp.com/api/contactrequests/create/",
      data: form,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
          <h4>
            <strong>Please let us know your query</strong>
          </h4>
          <br />
        </div>
        <div className="col-lg-8">
          <form
            className="form-contact contact_form"
            id="contactForm"
            noValidate="novalidate"
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="name">Enter your name:</label>
                  <input
                    className="form-control valid"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="email">Enter your email:</label>
                  <input
                    className="form-control valid"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="phone">Enter your phone number:</label>
                  <input
                    type="tel"
                    placeholder="01 234 567"
                    className="form-control"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    id="phone"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="subject">Subject:</label>
                  <input
                    className="form-control"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    id="subject"
                    type="text"
                    placeholder="The Reason"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label for="message">Message:</label>
                  <textarea
                    className="form-control w-100"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    cols={30}
                    rows={9}
                    placeholder="Enter your message"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                onClick={(e) => {
                  addNewContactForm(e);
                  notify();
                }}
                className="button button-contactForm boxed-btn"
              >
                <strong>Send Message</strong>
              </button>
            </div>
          </form>
          <ToastContainer
            autoClose={4000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home" />
            </span>
            <div className="media-body">
              <h3>Beirut, Lebanon</h3>
              <p>Remote office</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email" />
            </span>
            <div className="media-body">
              <h3>edupass2020@gmail.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
