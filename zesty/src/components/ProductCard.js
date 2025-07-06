// components/ProductCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, image, price, description } = product;

  return (
    <Card className="h-100 shadow-sm">
      <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">${price.toFixed(2)}</Card.Text>
          <Card.Text style={{ fontSize: '0.9rem' }}>
            {description.length > 80 ? description.slice(0, 80) + '...' : description}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductCard;
