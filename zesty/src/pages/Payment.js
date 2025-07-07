import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ cart }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    address: '',
    cardNumber: '',
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully for $${total.toFixed(2)}!`);
    navigate('/');
  };

  return(
     <Container className="py-5">
      <h2>Payment</h2>
      <Row>
      <Col md={6}>
      <p>Please fill out your personal information to complete your purchase. </p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name"  required value={form.name}  onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" required value={form.address}  onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value={form.mail}  onChange={handleChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number"  value={form.phone}  onChange={handleChange} />
                </Form.Group>

                
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                required
                value={form.cardNumber}
                onChange={handleChange}
              />
            </Form.Group>

                <Link to='/confirmation'  variant="primary" type="submit">
                    Place Order
                </Link>
            </Form>
        </Col>
        <Col md={6}>
          <h4>Order Summary</h4>
          <ul className="list-unstyled">
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} × {item.quantity} = ${(
                  item.price * item.quantity
                ).toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <h5>Total: ${total.toFixed(2)}</h5>
        </Col>
        </Row>
      </Container>
  );
  };

export default PaymentPage;