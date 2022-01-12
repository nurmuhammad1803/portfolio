import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse, faCommentDollar, faUserClock } from "@fortawesome/free-solid-svg-icons";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="my-skills">
        <Container>
          <Row>
            <Col>
              <div className="skill__card">
                <FontAwesomeIcon icon={faLaptopHouse} />
                <h3 className="skill__title">Uydan ishlayman</h3>
                <p className="skill__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti voluptatem reiciendis minus, a dolores.
                </p>
              </div>
            </Col>
            <Col>
              <div className="skill__card">
                <FontAwesomeIcon icon={faUserClock} />
                <h3 className="skill__title">Tez va sifatli</h3>
                <p className="skill__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti voluptatem reiciendis minus, a dolores.
                </p>
              </div>
            </Col>
            <Col>
              <div className="skill__card">
                <FontAwesomeIcon icon={faCommentDollar} />
                <h3 className="skill__title">Qimmat emas</h3>
                <p className="skill__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti voluptatem reiciendis minus, a dolores.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
