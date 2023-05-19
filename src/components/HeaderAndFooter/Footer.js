import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'
// import FigureImage from 'react-bootstrap/FigureImage'
// import FigureCaption from 'react-bootstrap/FigureCaption'

// import Grid from 'react-bootstrap/esm/Grid';

function Footer() {
  return (
    <>
        <Container fluid className="bg-dark text-muted">
        {/* <Grid> */}
            <Row  className='p-3 text-light d-flex align-items-center ' >
                <Col sm={2} className='d-flex align-items-center justify-content-center'>
                    <Image src="./favicon.ico" alt="Tiny Logo" />
                    <b>lorem</b>
                </Col>
                <Col sm={6} className='d-flex justify-content-center'>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </Col>
                <Col sm={{span:2, offset:2}} className='d-flex justify-content-center' >
                    <Button className='rounded-1 border-0 p-2' style={{backgroundColor:"rgb(248, 68, 100)", color:"rgb(255, 255, 255)"}}> Contact today!</Button>
                </Col>
            </Row>

            <Row className="p-3 bg-secondary d-flex align-items-center ">
                <Col xs={4} className='d-flex justify-content-center'>
                <Figure>
                    <Figure.Image src="./favicon.ico" alt="Tiny Logo"  /> 
                    <Figure.Caption className='text-light'>Nulla vitae</Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={4} className='d-flex justify-content-center'>
                    <Figure >
                    <Figure.Image src="./favicon.ico" alt="Tiny Logo"  /> 
                    <Figure.Caption className='text-light'>Nulla vitae</Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={4} className='d-flex justify-content-center'>
                <Figure>
                    <Figure.Image src="./favicon.ico" alt="Tiny Logo"  /> 
                    <Figure.Caption className='text-light'>Nulla vitae </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <p>Lorem</p>
            <small>lorem ipsum lorem ipsum lorem ipsum</small> <br/><br/>
            <p>Lorem</p>
            <small>lorem ipsum lorem ipsum lorem ipsum</small> <br/><br/>
            <p>Lorem</p>
            <small>lorem ipsum lorem ipsum lorem ipsum</small> <br/><br/>
        {/* </Grid>     */}
        </Container>    
    </>
  )
}

export default Footer
