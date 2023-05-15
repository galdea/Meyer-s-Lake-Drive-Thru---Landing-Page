import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    const formData = {
      "form-name": "contact",
      name,
      email,
      message
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encodeFormData(formData),
    })
      .then(() => {
        alert("Message sent, we will be contacting you soon!");
        window.location.reload();
      })
      .catch((error) => alert(error));
  };

  encodeFormData = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form
                  name="contact"
                  onSubmit={this.handleSubmit}
                  id="contactForm"
                  noValidate
                  data-netlify="true"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                          value={name}
                          onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          value={email}
                          onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={(e) => this.setState({ message: e.target.value })}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2022 Designed by{" "}
              <a href="http://www.gabrielaldea.com" rel="nofollow">
                Gabriel Aldea
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
