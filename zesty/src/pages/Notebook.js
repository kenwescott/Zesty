import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Accordion,
  Form,
  Button,
} from 'react-bootstrap';
import products from '../Data/Products';
import ProductCard from '../components/ProductCard';

const Notebook = () => {
  // Filter states
  const [materialFilter, setMaterialFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const clearFilters = () => {
    setMaterialFilter('');
    setTypeFilter('');
    setPriceFilter('');
  };

  // Base products
  const penPencilProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === 'stationery' &&
      ['notebook'].includes(product.subcategory?.toLowerCase())
  );

  // Apply filters
  const filteredProducts = penPencilProducts.filter((product) => {
    const matchesMaterial =
      !materialFilter ||
      product.material?.toLowerCase() === materialFilter.toLowerCase();

    const matchesType =
      !typeFilter ||
      product.type?.toLowerCase() === typeFilter.toLowerCase();

    const matchesPrice =
      !priceFilter ||
      (priceFilter === 'under5' && product.price < 5) ||
      (priceFilter === '5to10' && product.price >= 5 && product.price <= 10) ||
      (priceFilter === 'over10' && product.price > 10);

    return matchesMaterial && matchesType && matchesPrice;
  });

  return (
    <Container className="py-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/stationery">Stationery</Breadcrumb.Item>
        <Breadcrumb.Item active>Notebook</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="gx-5">
        {/* Left Filters */}
        <Col md={3}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">Filter</h5>
            <Button
              variant="link"
              size="sm"
              className="text-decoration-none text-muted"
              onClick={clearFilters}
              style={{ marginLeft: '10px' }}
            >
              Clear
            </Button>
          </div>

          <Accordion alwaysOpen defaultActiveKey={['0', '1', '2']}>
            {/* Material */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Material</Accordion.Header>
              <Accordion.Body>
                {['Plastic', 'Metal', 'Wood'].map((material) => (
                  <Form.Check
                    key={material}
                    type="radio"
                    name="material"
                    label={material}
                    checked={materialFilter === material}
                    onChange={() => setMaterialFilter(material)}
                  />
                ))}
                <Form.Check
                  type="radio"
                  name="material"
                  label="All"
                  checked={materialFilter === ''}
                  onChange={() => setMaterialFilter('')}
                />
              </Accordion.Body>
            </Accordion.Item>

            {/* Type */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Type</Accordion.Header>
              <Accordion.Body>
                {['Ballpoint', 'Fountain', 'Mechanical', 'HB'].map((type) => (
                  <Form.Check
                    key={type}
                    type="radio"
                    name="type"
                    label={type}
                    checked={typeFilter === type}
                    onChange={() => setTypeFilter(type)}
                  />
                ))}
                <Form.Check
                  type="radio"
                  name="type"
                  label="All"
                  checked={typeFilter === ''}
                  onChange={() => setTypeFilter('')}
                />
              </Accordion.Body>
            </Accordion.Item>

            {/* Price */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="radio"
                  name="price"
                  label="Under $5"
                  checked={priceFilter === 'under5'}
                  onChange={() => setPriceFilter('under5')}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="$5 - $10"
                  checked={priceFilter === '5to10'}
                  onChange={() => setPriceFilter('5to10')}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="Over $10"
                  checked={priceFilter === 'over10'}
                  onChange={() => setPriceFilter('over10')}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="All"
                  checked={priceFilter === ''}
                  onChange={() => setPriceFilter('')}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Right Products */}
        <Col md={9}>
          <h2 className="fw-bold mb-4">Pens & Pencils</h2>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <p>No products match your filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Notebook;
