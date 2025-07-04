import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'./Summerpromo.css';

function Sumpromo() {
  return (
    <Navbar expand="lg" className="summer-promo-navbar py-2" style={{textAlign: 'center'}}>
      <Container>
        <Navbar.Text className="promo-text">GET UPTO 50% OFF DISCOUNT DURING OUR SUMMER SALES</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Sumpromo;