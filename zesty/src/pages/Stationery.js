import React from 'react';
import { Container, Row, Col, Breadcrumb, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../Data/Products';
import HorizontalProductSlider from '../components/HorizontalProductSlider';

const stationerySubCategories = ['Notebook', 'Pen', 'Pencil', 'Paper'];

const StationeryPage = () => {
  // Helper function to filter by subcategory
  const getSubcategoryProducts = (subcategoryName) =>
    products.filter(
      (p) =>
        p.category.toLowerCase() === 'stationery' &&
        p.subcategory?.toLowerCase() === subcategoryName.toLowerCase()
    );

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Stationery</Breadcrumb.Item>
      </Breadcrumb>

      <div className="Intro-live " style={{marginBottom: 50}}>
        <h2>Starting a new academic year?</h2>
        <p>Take your notes a step further with our quality notebooks, pens, and more.</p>
      </div>

      <Row className="gx-5">
        {/* Left: Accordion as navigation links */}
        <Col md={3}>
          <h5>Explore the categories</h5>
          <Accordion defaultActiveKey="0" alwaysOpen>
            {stationerySubCategories.map((sub, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={sub}>
                <Accordion.Header as={Link} to={`/stationery/${sub.toLowerCase()}`}>
                  {sub}
                </Accordion.Header>
              </Accordion.Item>
            ))}
            <Accordion.Item eventKey="reset">
              <Accordion.Header as={Link} to="/stationery">
                All
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Right: Horizontal Sliders */}
        <Col md={9}>
          {stationerySubCategories.map((sub) => (
            <HorizontalProductSlider
              key={sub}
              title={sub}
              products={getSubcategoryProducts(sub)}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default StationeryPage;
