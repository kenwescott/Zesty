
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/Products';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // All hooks should go here
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [allReviews, setAllReviews] = useState(product?.reviews || []);

  if (!product) return <p className="text-center mt-5">Product not found</p>;

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newReview = comment.trim();
    setAllReviews([...allReviews, newReview]);
    setComment('');
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
          <Button variant="primary" size="lg">
            Add to Cart
          </Button>
        </Col>
      </Row>

      {/* Optional: Reviews Section */}
      <Row className="mt-5">
        <Col>
         <h5>Reviews</h5>
          {allReviews.length > 0 ? (
            <ul className="list-unstyled">
              {allReviews.map((rev, idx) => (
                <li key={idx} className="mb-2">
                  <i className="bi bi-chat-left-quote"></i> {rev}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </Col>
      </Row>

      {/* Leave a Review */}
      <Row className="mt-5">
        <Col>
          <h5>Leave a Review</h5>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-2">
              <label htmlFor="reviewComment">Your Review:</label>
              <textarea
                id="reviewComment"
                className="form-control"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              Submit Review
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
