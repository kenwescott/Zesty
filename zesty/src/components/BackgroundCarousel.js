import Carousel from 'react-bootstrap/Carousel';
import './BackgroundCarousel.css'

function BackgroundCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src='/images/sales.png' alt='50% Off'/>
        <Carousel.Caption>
          <h3>Summer Sale On Now!</h3>
          <p>Save money with your purcheses this summer now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='/images/_Monochrome (1).png' alt=''/>
        <Carousel.Caption>
          <h3>Save on clothes!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='/images/bureau.jpg' alt=''/>
        <Carousel.Caption>
          <h3>Save on stationary!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BackgroundCarousel;