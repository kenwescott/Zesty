import React, { useState } from 'react';
import {  Table, Form,  Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
    const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handleProceedToPayment = () => {
    navigate('/payment');
  };
    return (
        <Container  className="py-5">
            <h2>Checkout Page</h2>
          {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping</Link>.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: ${total.toFixed(2)}</h4>
           <Button variant="success" onClick={handleProceedToPayment}>
            Proceed to Payment
          </Button>
        </>
      )}
            
        </Container>
    );
}

export default CartPage;