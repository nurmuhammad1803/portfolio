import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <section className="contact">
      <Container>
        <Row className="aic ">
          <Col lg="6">
            <div className="contact__form">
              <form>
                <input placeholder="Ism..." className="input input__mini" />
                <input
                  placeholder="Familiya..."
                  className="input input__mini"
                />
                <input placeholder="Email..." className="input input__big" />
                <input
                  placeholder="Habarni yozing..."
                  className="input input__message"
                />
              </form>
            </div>
          </Col>
          <Col>
            <div className="contact__text">
              <h2>Aloqa</h2>
              <div>
                <h4>Phone</h4>
                <p>+998 93 618 21 70</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>bussinesnurmuhammad1803@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <button className="contact__btn df aic jcc">Send Message</button>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
