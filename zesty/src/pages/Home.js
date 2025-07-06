import BackgroundCarousel from'../components/BackgroundCarousel';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../Data/Products';
import '../components/CategoryShowcase';
import CategoryShowcase from '../components/CategoryShowcase';


function Home() {
     // List of product IDs you want to feature on the home page
  const featuredProductIds = [2,3,4,6,7,8,10,14]; // Update these IDs as needed

  // Filter products based on featured IDs
  const featuredProducts = products.filter(product =>
    featuredProductIds.includes(product.id)
  );


    
  return (
    <div>
      {/* Carousel */}
      <BackgroundCarousel />

      {/* Other homepage content */}
      <section className="mt-5 text-center">
        <h2>Best-selling products</h2>
      </section>
      <Container className="my-5">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {featuredProducts.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
    <section className="mt-5 text-center">
        <h2>Shop by Category</h2>
    </section>
    
       <CategoryShowcase/>

    </div>

  );
}


export default Home;
