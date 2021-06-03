import './slideshow.css'
import Carousel from 'react-bootstrap/Carousel'
import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';
import 'bootstrap/dist/css/bootstrap.css'

function Slideshow() {
    return (
        <Carousel className='caro' fade='true'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )
    
}

export default Slideshow;