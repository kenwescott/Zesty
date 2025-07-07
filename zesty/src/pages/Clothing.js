import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Container, ListGroup } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../Data/Products';


function Clothing() {

    const [searchTerm, setSearchTerm] = useState("") ;
    const [categoryFilter, setCategoryFilter] = useState([]);

    const editCategoryFilter=(e)=>{
        const checkedID = e.target.value;
        if(e.target.checked){
            setCategoryFilter([...categoryFilter, checkedID]);
        }
        else{
            setCategoryFilter(categoryFilter.filter(item=>item!=checkedID));
        }
    }

    const itemFilter = (item) => {
        if (categoryFilter.length === 0) return true;
        for (const filter of categoryFilter){
            if(item.category.toLowerCase().includes(filter.toLowerCase())) return true;
        }
        return false;
    }
    const filteredItems = products.filter((item) => (itemFilter(item)) &&
            (searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    //const filteredItems = products.filter(
    //    (item) => (!categoryFilter || itemFilter(item)) &&
    //        (searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    //);
  
    
    const [cart, setCart] = useState([]);
    const addToCart = (item) => setCart([...cart, item]);
    
    
    return (
        <Container>
        <Row>
            <Form>
                <Form.Control
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term state on input change
                />
                    {Array.from(new Set(products.map(products => products.category))).map((value) => (
                    <div key={value} className="mb-3">
                        <Form.Check
                            type='checkbox'
                            id={value}
                            label={value}
                            value={value}
                            onChange={(e) => editCategoryFilter(e)}
                        />
                    </div>
                ))}
                </Form>
            </Row>
            <Row> 
                {filteredItems.map((item) => (
                    <Col md={3} className="mb-4" key={item.id}>
                        <ProductCard product={item} />
                    </Col>

                ))}
            </Row>
        </Container>
    );
}

export default Clothing;