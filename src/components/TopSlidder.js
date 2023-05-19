import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';

function TopSlidder() {
  return (
    <>
    <Container fluid className='bg-light'>
    <Carousel className="p-2 bg-light">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="./hrzntl_pic.PNG"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./hrzntl_pic1.PNG"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./hrzntl_pic.PNG"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./hrzntl_pic1.PNG"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
    </>
  );
}

export default TopSlidder;