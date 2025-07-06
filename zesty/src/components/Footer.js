import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-3 mt-5">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} className="mb-4">
            <h5>Zesty</h5>
            <p>
              Your one-stop student destination for fashion, stationery, and more. Enjoy seamless shopping and exclusive summer deals!
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={4} className="mb-4">
            <h5>Subscribe to our newsletter</h5>
            <Form>
              <Form.Group controlId="formNewsletter" className="d-flex">
                <Form.Control type="email" placeholder="Enter email" className="me-2" />
                <Button variant="primary">Subscribe</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Zesty. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
