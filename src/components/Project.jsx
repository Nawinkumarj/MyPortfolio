import { Container,Row, Col } from "react-bootstrap"
import avinya from "../assets/Projects/avinya.jpg"
const Project = () => {
  return (
    <Container lg={12}id="projects">
        <Row>
            <Col lg={12} className="projects text-center">
            <h1 className="projects-title heading">Projects</h1>
            <div className="project-items">
            <div className="project-item">
                    <img src={avinya} alt="" className="project-img" />
                    <div className="project-content">
                    <h2>Avinya Constructions</h2>
                    <p>Project 2 description</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src="" alt="" className="project-img" />
                    <div className="project-content">
                    <h2>Maxpro India</h2>
                    <p>Project 2 description</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src="" alt="" className="project-img" />
                    <div className="project-content">
                    <h2></h2>
                    <p>Project 3 description</p>
                    </div>
                </div>
                <div className="project-item">
                    <img src="" alt="" className="project-img" />
                    <div className="project-content">
                    <h2>Project 3</h2>
                    <p>Project 3 description</p>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Project
