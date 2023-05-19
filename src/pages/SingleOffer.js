import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import data from './offers.json';               //NOTE: data is a random variable name chose and declared on this line, you can use anything but data is usually used for best practices
import { useParams } from 'react-router-dom';


// function SingleOffer() {
const SingleOffer = () => {
    const {ofrid} = useParams();
    
    const ofr = data.map((ofr) => ofr.id=== ofrid );
           
    // const ofrid = () => {
    //     const {ofrid}  = useParams();
    // }
    // console.log(data);
    // const singofr = data.filter;
    return (
        <>
            {/* <Container>
                <Row>
                    {data.map((ofr) => {
                        if(ofr.id===ofrid) {                    => ofr.id=== parseInt( ofrid )&&
                            return (
                                <Col xs={6} md={4} lg={3} className="p-2 bg-light" id={ofr.id} key={ofr.id}>
                                    <Card className="bg-light">
                                        <Card.Img src={ofr.image} />
                                        <Card.Body >
                                            <Card.Title>{ofr.name}</Card.Title>
                                            <Card.Text>{ofr.validity}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        }
                    })}
                </Row>
            </Container> */}

            
            
             <Container>
                <Row>
               
                    
                                <Col xs={6} md={4} lg={3} className="p-2 bg-light" id={ofrid.id} key={ofr.id}>
                                    <Card className="bg-light">
                                        <Card.Img src={ofrid.image} />
                                        <Card.Body >
                                            <Card.Title>{ofrid.name}</Card.Title>
                                            <Card.Text>{ofr.validity}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                    
                </Row>
            </Container>

           

        </>
    );
}

//  classes are mainlyused for error boundries but you can even use npm to pull EB librarikes 
export default SingleOffer
