import React from "react";

const ContactForm = () => {
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
            action="contact_process.php"
            method="post"
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
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="html">Enter your phone number:</label>
                  <input
                    type="tel"
                    placeholder="01 234 567"
                    className="form-control"
                    name="phone"
                    id="phone"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="html">Subject:</label>
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    placeholder="The Reason"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label for="html">Message:</label>
                  <textarea
                    className="form-control w-100"
                    name="message"
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
                className="button button-contactForm boxed-btn"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home" />
            </span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet" />
            </span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email" />
            </span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
