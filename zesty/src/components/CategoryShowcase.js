import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CategoryShowcase.css';
import { useNavigate } from 'react-router-dom';

const CategoryShowcase = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="my-5">
      <Row className="g-3">
        {/* Left big card */}
        <Col md={8}>
          <div
            className="category-card large-card"
            onClick={() => navigate('/clothing')}
            style={{ backgroundImage: "url('/images/ASOS.jpg')" }}
          >
            <div className="category-label">Clothing</div>
          </div>
        </Col>

        {/* Right stacked small cards */}
        <Col md={4}>
          <Row className="g-3">
            <Col xs={12}>
              <div
                className="category-card small-card"
                onClick={() => navigate('/household')}
                style={{ backgroundImage: "url('/images/bath.jpg')" }}
              >
                <div className="category-label">Household</div>
              </div>
            </Col>
            <Col xs={12}>
              <div
                className="category-card small-card"
                onClick={() => navigate('/stationery')}
                style={{ backgroundImage: "url('/images/bureau.jpg')" }}
              >
                <div className="category-label">Stationery</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryShowcase;
