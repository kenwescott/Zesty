
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/Products';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetail = ({addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p className="text-center mt-5">Product not found</p>;

  // Handle counter
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <Container className="py-5">
      <Row className="gx-1">
        {/* LEFT: Product Image */}
        <Col md={5} className="pe-md-3">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '450px', objectFit: 'contain' }}
          />
        </Col>

        {/* RIGHT: Details */}
        <Col md={5} >
          <h2>{product.title}</h2>

          {/* Star Rating (static for now) */}
          <div className="mb-2 text-warning">
            {'★'.repeat(4)}{'☆'} {/* 4 out of 5 stars as example */}
          </div>

          <p className="text-muted">{product.description}</p>

          <h4 className="mb-3">${product.price.toFixed(2)}</h4>

          {/* Quantity selector */}
          <div className="d-flex align-items-center mb-3">
            <Button variant="outline-secondary" onClick={handleDecrease}>
              −
            </Button>
            <Form.Control
              type="text"
              value={quantity}
              readOnly
              className="mx-2 text-center"
              style={{ width: '60px' }}
            />
            <Button variant="outline-secondary" onClick={handleIncrease}>
              +
            </Button>
          </div>

          {/* Add to Cart Button */}
                
                  <Button variant="primary" size="lg" onClick={addToCart(product) }>
                          Add to Cart
                      </Button>
        </Col>
      </Row>

      {/* Optional: Reviews Section */}
      <Row className="mt-5">
        <Col>
          <h5>Reviews</h5>
          {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
