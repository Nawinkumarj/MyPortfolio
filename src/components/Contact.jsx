import { Col, Container } from "react-bootstrap"

const Contact = () => {
  return (
    <Container id="contact">
      <Col lg={12} md={6}>
      <h1 className="Contact-title heading">Contact</h1>
      <div className="Contactus-form">
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Name" />
            <input type="tel" className="form-control" id="tel" placeholder="Phone Number" />
            <input type="email" className="form-control" id="email" placeholder="Email Address" />
            <input type="text" className="form-control" placeholder="Company Name" />
            <textarea className="form-control" id="message" placeholder="Enter your message" rows="5" />
            <button type="submit" className="Contact-btn">Submit</button>
          </div>
        </form>
      </div>
      </Col>
    </Container>
  )
}

export default Contact
