import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Accordion,
  Form,
} from 'react-bootstrap';
import products from '../Data/Products';
import ProductCard from '../components/ProductCard';

const Notebook = () => {
  const [priceFilter, setPriceFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Filter to pens & pencils from stationery category
  const penPencilProducts = products.filter(
    (p) =>
      p.category.toLowerCase() === 'stationery' &&
      (p.subcategory?.toLowerCase() === 'Notebook')
  );

  // Apply filters
  const filteredProducts = penPencilProducts.filter((product) => {
    const price = product.price;
    const matchesPrice =
      !priceFilter ||
      (priceFilter === 'under5' && price < 5) ||
      (priceFilter === '5to10' && price >= 5 && price <= 10) ||
      (priceFilter === 'over10' && price > 10);

    const matchesMaterial =
      !materialFilter ||
      product.material?.toLowerCase() === materialFilter.toLowerCase();

    const matchesType =
      !typeFilter ||
      product.type?.toLowerCase() === typeFilter.toLowerCase();

    return matchesPrice && matchesMaterial && matchesType;
  });

  return (
    <Container className="py-4">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/stationery">Stationery</Breadcrumb.Item>
        <Breadcrumb.Item active>Notebook</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="gx-5">
        {/* Filters */}
        <Col md={3}>
          <h5>Filter</h5>
          <Accordion alwaysOpen defaultActiveKey={['0']}>
            {/* Price Filter */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="radio"
                  name="price"
                  label="Under $5"
                  onChange={() => setPriceFilter('under5')}
                  checked={priceFilter === 'under5'}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="$5 - $10"
                  onChange={() => setPriceFilter('5to10')}
                  checked={priceFilter === '5to10'}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="Over $10"
                  onChange={() => setPriceFilter('over10')}
                  checked={priceFilter === 'over10'}
                />
                <Form.Check
                  type="radio"
                  name="price"
                  label="All"
                  onChange={() => setPriceFilter('')}
                  checked={priceFilter === ''}
                />
              </Accordion.Body>
            </Accordion.Item>

            {/* Material Filter */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Material</Accordion.Header>
              <Accordion.Body>
                {['Plastic', 'Metal', 'Wood'].map((material) => (
                  <Form.Check
                    key={material}
                    type="radio"
                    name="material"
                    label={material}
                    onChange={() => setMaterialFilter(material)}
                    checked={materialFilter === material}
                  />
                ))}
                <Form.Check
                  type="radio"
                  name="material"
                  label="All"
                  onChange={() => setMaterialFilter('')}
                  checked={materialFilter === ''}
                />
              </Accordion.Body>
            </Accordion.Item>

            {/* Type Filter */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Type</Accordion.Header>
              <Accordion.Body>
                {['Ballpoint', 'Fountain', 'Mechanical', 'HB'].map((type) => (
                  <Form.Check
                    key={type}
                    type="radio"
                    name="type"
                    label={type}
                    onChange={() => setTypeFilter(type)}
                    checked={typeFilter === type}
                  />
                ))}
                <Form.Check
                  type="radio"
                  name="type"
                  label="All"
                  onChange={() => setTypeFilter('')}
                  checked={typeFilter === ''}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Products */}
        <Col md={9}>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col md={4} sm={6} xs={12} className="mb-4" key={product.id}>
                      <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <p>No products match the selected filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Notebook;
