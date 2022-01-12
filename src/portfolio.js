import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import prt1 from "./images/prt1.jpg";
import prt2 from "./images/prt2.jpg";
import prt3 from "./images/prt3.jpg";
import prt4 from "./images/prt4.jpg";
import prt5 from "./images/prt5.jpg";
import prt6 from "./images/prt6.jpg";

let link = "https://github.com/nurmuhammad1803";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Container>
        <Row>
          <Col>
            <div className="portfolio__title df aic jcsb">
              <h2>Loyihalar</h2>
              <a href="https://github.com/nurmuhammad1803">Github</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="grid portfolio__projects">
              <div className="project__card">
                <img src={prt1} />
                <a className="card__link" href={link}>
                  View Demo
                </a>
              </div>
              <div className="project__card">
                <img src={prt2} />
                <a className="card__link" href={link}>
                  View Demo
                </a>
              </div>
              <div className="project__card">
                <img src={prt3} />
                <a className="card__link" href={link}>
                  View Demo
                </a>
              </div>
              <div className="project__card">
                <img src={prt4} />
                <a className="card__link" href={link}>
                  View Demo
                </a>
              </div>
              <div className="project__card">
                <img src={prt5} />
                <a className="card__link" href={link}>
                  View Demo
                </a>
              </div>
              <div className="project__card">
                <img src={prt6} />
                <a className="card__link" href={link}>
                  View Demo
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Portfolio;
