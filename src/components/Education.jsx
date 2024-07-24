import { Container, Row, Col } from "react-bootstrap"
const Education = () => {
  return (
    <Container className="education-container" id="experience">
        <Row>
        <Col xs={12} md={6} xl={12} lg={12}>
        <h1 className="education-title  heading">EXPERIENCE</h1>
        <Col xs={12} md={6} lg={12} className="timeline-items">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <i className="fas fa-graduation-cap"></i>
                    <div className="timeline-date">Present</div>
                    <div className="timeline-content">
                    <p>Software&nbsp;Developer.</p>
                    <h3>TRDFIN Support Services.</h3>
                    <p>Mylapore,Chennai.</p>
                    </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <i className="fas fa-graduation-cap"></i>
                    <div className="timeline-date">2023</div>
                    <div className="timeline-content right">
                    <p>Web developer Trainee.</p>
                    <h3>TRDFIN Support Services.</h3>
                    <p>Mylapore,Chennai.</p>
                    </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <i className="fas fa-graduation-cap"></i>
                    <div className="timeline-date">2019</div>
                    <div className="timeline-content">
                    <h3>Jeppiaar SRR Engineering College</h3>
                    <p>Bachelor&nbsp;of&nbsp;Technology.</p>
                    </div>
            </div>
            </Col>
        </Col>
        </Row>
    </Container>
    
  )
}

export default Education
