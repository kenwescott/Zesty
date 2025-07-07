import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Accordion, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../Data/Products';
import HorizontalProductSlider from '../components/HorizontalProductSlider';

const stationerySubCategories = ['Notebook', 'Pen', 'Pencil', 'Paper'];

const StationeryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by category, subcategory, and title match
  const getSubcategoryProducts = (subcategoryName) =>
    products.filter(
      (p) =>
        p.category.toLowerCase() === 'stationery' &&
        p.subcategory?.toLowerCase() === subcategoryName.toLowerCase() &&
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Stationery</Breadcrumb.Item>
      </Breadcrumb>

      <div className="Intro-live" style={{ marginBottom: 40 }}>
        <h2>Starting a new academic year?</h2>
        <p>Take your notes a step further with our quality notebooks, pens, and more.</p>
      </div>

      <Row className="gx-5">
        {/* Left: Accordion navigation */}
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

        {/* Right: Search + Horizontal sliders */}
        <Col md={9}>
          <Form className="mb-4">
            <Form.Control
              type="text"
              placeholder="Search stationery items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>

          {stationerySubCategories.map((sub) => {
            const filteredProducts = getSubcategoryProducts(sub);
            if (filteredProducts.length === 0) return null; // skip empty sliders
            return (
              <HorizontalProductSlider
                key={sub}
                title={sub}
                products={filteredProducts}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default StationeryPage;
