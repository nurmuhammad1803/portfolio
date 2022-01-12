import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <div className="footer__instagram">
              <h2 className="df aic fdrc jcc">
                <span>Meni Instagramda kuzating</span>
                <a href="https://instagram.com/nurmuhammad_dev" className="h2__link">
                  @nurmuhammad_dev
                </a>
              </h2>
              <p className="footer__end tac">© nurmuhammad_dev 2022 </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer
// export default class Footer extends React.Component {
//   render() {
//     //
//     return (
//       <footer>
//         <Container>
//           <Row>
//             <Col>
//               <div className="footer__instagram">
//                 <h2 className="df aic fdrc jcc">
//                   <span>Meni Instagramda kuzating</span>
//                   <a href="instagram.com/nurmuhammad_dev" className="h2__link">
//                     @nurmuhammad_dev
//                   </a>
//                 </h2>
//                 <p className="footer__end tac">© nurmuhammad_dev 2022 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     );
//   }
// }
