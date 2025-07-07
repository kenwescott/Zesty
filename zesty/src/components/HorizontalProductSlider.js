import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import ProductCard from './ProductCard'; // your existing card component
import './HorizontalProductSlider.css';

const HorizontalProductSlider = ({ title, products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="horizontal-slider my-4">
      <h5 className="mb-3">{title}</h5>
      <div className="slider-wrapper position-relative">
        <Button
          variant="light"
          className="slider-arrow left"
          onClick={() => scroll('left')}
        >
          &#8249;
        </Button>

        <div className="slider-container" ref={scrollRef}>
          {products.map((product) => (
            <div className="slider-item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <Button
          variant="light"
          className="slider-arrow right"
          onClick={() => scroll('right')}
        >
          &#8250;
        </Button>
      </div>
    </div>
  );
};

export default HorizontalProductSlider;
