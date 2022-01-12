import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Collapse,
  Row,
  NavbarToggler,
  App,
  Nav,
  UncontrolledDropdown,
  Col,
  Button,
} from "reactstrap";
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col>
              <Navbar color="transparent" light expand="lg">
                <NavbarBrand className="m-0 p-0" href="/">
                  @nurmuhammad_dev
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ms-auto" navbar>
                    <NavItem>
                      <NavLink href="/">Asosiy</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/portfolio">Loyihalar</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/about">Men haqimda</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Bilimlarim</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/contact">Aloqa</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col xl="10" className="m-auto">
              <div className="header__title tac df fdrc aic jcc">
                <h1>Ishingizdan zavqlaning</h1>
                <p className="text text_h1">
                  Har qanday ahmoq mashina tushunadigan kod yozishi mumkin.
                  Yaxshi dasturchilar odamlar tushunadigan kod yozadilar.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
