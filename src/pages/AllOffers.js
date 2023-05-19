import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import data from './offers.json';               //NOTE: data is a random variable name chose and declared on this line, you can use anything but data is usually used for best practices


function AllOffers() {
    // console.log(data);
    return (
        <>
            <Container>
                <Row>
                    {data.map((ofr) => 
                    <Col  xs={6} md={4} lg={3} className="p-2 bg-light" id={ofr.id} key={ofr.id}>
                        <Card className="bg-light" >    {/* onClick={()=>window.location.href="/offers/" + ofr.id} */}
                            <Card.Img src={ofr.image}/>
                            <Card.Body >
                                <Card.Title>{ofr.name}</Card.Title>
                                <Card.Text>{ofr.validity}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default AllOffers
