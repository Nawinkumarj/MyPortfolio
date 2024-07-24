import { Container,Col,Row } from "react-bootstrap"
import aboutimg from '../assets/Nawin_02.png'
import resume from '../assets/Nawinkumar P_resume.pdf'
const AboutMe = () => {
  return (
    <Container className="about-me" id="about">
        <Row>
            <Col xs={12} md={6} lg={12} className="aboutme-text">
            <h1 className="aboutme-title heading">About Me</h1>
            </Col>
            <Col xs={12} md={6} lg={6} className="aboutme-img">
            <img src={aboutimg} alt="" / >
            </Col>
            <Col  xs={12} md={6} lg={6} className="aboutme-tables">
            <table className="aboutme-table">
                <tbody>
                    <tr>
                        <td className="aboutme-data">Name:</td>
                        <td className="aboutme-data light">Nawinkumar P</td>
                    </tr>
                    <tr>
                        <td className="aboutme-data">Date of Birth:</td>
                        <td className="aboutme-data light">September 23, 2001</td>
                    </tr>
                    <tr>
                        <td className="aboutme-data">Address :</td>
                        <td className="aboutme-data light">Chengalpattu,&nbsp;Chennai,&nbsp;TamilNadu</td>
                    </tr>
                    <tr>
                        <td className="aboutme-data">Email:</td>
                        <td className="aboutme-data light">Nawinparthee@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="aboutme-data">Phone:</td>
                        <td className="aboutme-data light">+91 9788715125</td>
                    </tr>
                </tbody>
            </table>
            <div className="cv">
                <a href={resume} className="cv-btn" target="_blank">Download CV</a>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutMe
