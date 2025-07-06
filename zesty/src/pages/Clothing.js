import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Container, ListGroup } from 'react-bootstrap';

const items = [
    {
        id: 1,
        name: 'T-shirt',
        category: 'Tops',
        subcategory: 'T-shirt',
        price: 19.99,
        image: '',
    },
    {
        id: 2,
        name: 'Jeans',
        category: 'Pants',
        subcategory: 'Jeans',
        price: 29.99,
        image: '',
    },
    {
        id: 3,
        name: 'Hat',
        category: 'Accessories',
        subcategory: 'Hat',
        price: 6.99,
        image: '',
    },
    {
        id: 4,
        name: 'Boxers',
        category: 'Underwear',
        subcategory: 'Boxers',
        price: 2.99,
        image: '',
    },
];
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

    const itemFilter=(item)=>{
        for (const filter of categoryFilter){
            if(item.category.toLowerCase().includes(filter)||item.subcategory.toLowerCase().includes(filter)) return true;
        }
        return false;
    }
    const filteredItems = items.filter( 
        (item) => 
            (!categoryFilter || itemFilter(item)) && 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    
    const [cart, setCart] = useState([]);
    const addToCart = (item) => setCart([...cart, item]);

    
    return (
        <Container>
        <Form>
            {['checkbox', 'radio', 'test3', 'test4'].map((value) => (
                <div key={value} className="mb-3">
                    <Form.Check
                        type='checkbox'
                        id={value}
                        label={value}
                        value={value}
                        onChange={(e) => editCategoryFilter(e)}
                    />
                </div>
            )) }
            </Form>
            <h1>`${categoryFilter}`</h1>
        </Container>
    );
}

export default Clothing;