import { Col, Container, Row } from "react-bootstrap"
import footerimg from '../assets/footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Make sure to use the correct icon prefix
const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Col lg={12}>
        <Row>
          <div className="footer-img">
            <img src={footerimg} alt="" />
          </div>
          <div className="social-icons">
            <a href="" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href=""className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href=""className="github"><FontAwesomeIcon icon={faGithub} /></a>
            <a href=""className="whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </Row>
      </Col>
    </Container>
  )
}

export default Footer

