import { Container, Row,Col } from "react-bootstrap"
import { MailChimpForm } from "./MailChimpForm"
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="logo"/>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social=icon">
              <a href="#"><img src={ navIcon1 } alt="navIcon"/></a>
              <a href="#"><img src={ navIcon2 } alt="navIcon"/></a>
              <a href="#"><img src={ navIcon3 } alt="navIcon"/></a>
            </div>
            <p>CopyRight 2022. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}