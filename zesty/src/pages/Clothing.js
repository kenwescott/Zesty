import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Accordion, Form } from 'react-bootstrap';
import products from '../Data/Products';
import HorizontalProductSlider from '../components/HorizontalProductSlider';
import { useNavigate } from 'react-router-dom';

const clothingMainCategories = ['Man', 'Woman'];

const ClothingPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by category and search
  const getCategoryProducts = (categoryName) =>
    products.filter(
      (p) =>
        p.category?.toLowerCase() === categoryName.toLowerCase() &&
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Clothing</Breadcrumb.Item>
      </Breadcrumb>

      {/* Intro */}
      <div className="Intro-live mb-4">
        <h2>Step up your style game</h2>
        <p>Discover our range of clothing for men and women – modern, stylish and affordable.</p>
      </div>

      <Row className="mt-3">
        {/* Left: Accordion navigation */}
        <Col md={3}>
          <h5>Explore the categories</h5>
          <Accordion defaultActiveKey="0" alwaysOpen>
            {clothingMainCategories.map((cat, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={cat}>
                <Accordion.Header>{cat}</Accordion.Header>
                <Accordion.Body>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => navigate(`/category/${cat.toLowerCase()}`)}
                  >
                    View {cat}
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            ))}
            <Accordion.Item eventKey="reset">
              <Accordion.Header>All</Accordion.Header>
              <Accordion.Body>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => navigate('/clothing')}
                >
                  View All
                </button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Right: Search + Horizontal sliders */}
        <Col md={9} className="ps-md-5">
          {/* Search bar */}
          <Form className="mb-4">
            <Form.Control
              type="text"
              placeholder="Search clothing items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>

          {/* Horizontal sliders by category */}
          {clothingMainCategories.map((category) => {
            const filteredProducts = getCategoryProducts(category);
            if (filteredProducts.length === 0) return null;

            return (
              <HorizontalProductSlider
                key={category}
                title={`${category}'s Clothing`}
                products={filteredProducts}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default ClothingPage;
