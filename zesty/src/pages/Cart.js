import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Cart({ cart }) {
    const cartItems = cart;
    return (
        <Container>
            <h2>Checkout Page</h2>
            <ul>
                {cartItems.map((item) => (<li>${item.title}   ${item.price}</li>))}

            </ul>
            <p>Please fill out your personal information to complete your purchase. </p>
            <Form>
                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                </Form.Group>

                <Link to='/confirmation' className="btn btn-primary">
                    Place Order
                </Link>
            </Form>
        </Container>
    );
}

export default Cart;