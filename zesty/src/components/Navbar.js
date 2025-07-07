import React , { useState } from 'react';
import { Navbar, Nav, Container,Form, Button   } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log('Search for:', searchValue);
      // Optionally: navigate to `/search?q=searchValue`
    }
  };
  
  return (
    <Navbar  expand="lg" className="border-bottom" sticky="top" style={{backgroundColor:'#DAFFEF'}}>
      <Container>
        <Navbar.Brand as={Link} to="/">Zesty</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">

            {/* Mega Menu */}
            <div className="nav-item dropdown position-static">
              <Nav.Link as={Link} to="/clothing" className="dropdown-toggle" data-bs-toggle="dropdown">
                Clothing
              </Nav.Link>
              <div className="dropdown-menu mega-menu p-4">
                <div className="row">
                  {/* Men Section */}
                  <div className="col-md-4">
                    <h6><Link to="/clothing/men" className="mega-header">Men</Link></h6>
                    <ul className="list-unstyled">
                      <li><Link to="/clothing/men/tshirts">Tops</Link></li>
                      <li><Link to="/clothing/men/jeans">Pants</Link></li>
                      <li><Link to="/clothing/men/jackets">Jackets</Link></li>
                    </ul>
                  </div>

            <div className="nav-item dropdown position-static">
              <Nav.Link as={Link} to="/stationery" className="dropdown-toggle" data-bs-toggle="dropdown">
                Stationery
              </Nav.Link>
              <div className="dropdown-menu mega-menu-station p-3">
                <div className="row">
                 
                  <div className="col-md-3">
                    <ul className="list-unstyled">
                      <li><Link to="/stationery/notebook">Notebooks</Link></li>
                      <li><Link to="/stationery/paper">Paper</Link></li>
                      <li><Link to="/stationery/pen_pencil">Pens & Pencils</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <Nav.Link as={Link} to="/household">Household</Nav.Link>
            
          </Nav>
          {/* Right-side icons */}
          <Nav className="ms-auto align-items-center gap-3">

            {/* Search Bar with Icon */}
            {/*<Form className="d-flex align-items-center" onSubmit={handleSearch}>*/}
            {/*  <Form.Control*/}
            {/*    type="search"*/}
            {/*    placeholder="Search"*/}
            {/*    className="me-2"*/}
            {/*    value={searchValue}*/}
            {/*    onChange={(e) => setSearchValue(e.target.value)}*/}
            {/*  />*/}
            {/*  <i*/}
            {/*    className="bi bi-search fs-5"*/}
            {/*    role="button"*/}
            {/*    onClick={handleSearch}*/}
            {/*  ></i>*/}
            {/*</Form>*/}
            
            

            {/* Cart Icon */}
            <Nav.Link as={Link} to="/cart">
              <i className="bi bi-cart fs-5"></i>
            { /* <div className="nav-cart-count">0</div> */}
            </Nav.Link>

            {/* Sign Up Button */}
            <Button variant="outline-primary" size="sm" as={Link} to="/signup">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default NavigationBar;
