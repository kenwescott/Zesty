import { Card, Button, Form, Row, Col, Container, ListGroup } from 'react-bootstrap';

function Confirmation() {


    return (
        <Container>
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h2>Thank you for your purchase! Your order has been successfully placed.</h2>
            <h4>We will send you a confirmation email shortly.</h4>

            <p>Please let us know how we did by leaving a review on your purchased items</p>
            </div></Container>
    );
}

export default Confirmation;