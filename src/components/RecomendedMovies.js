import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';

function RecomendedMovies() {
  return (
    <>
    <Container fluid className="bg-light">
    <h2>Recomended Movies</h2>
    <Carousel indicators={false} className="p-2 bg-light">
      <Carousel.Item >
        <CardGroup style={{gap:"20px"}} >
            <Card className="border-0 bg-light">
                <Card.Img src="./vrtcl_pic.PNG" />
                <Card.Body >
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic2.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic2.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
      </Carousel.Item>

      <Carousel.Item>
        <CardGroup style={{gap:"20px"}}>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic2.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic2.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
             <Card className="border-0 bg-light">
                <Card.Img   src="./vrtcl_pic2.PNG" />
                <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                    Genre1/Genre2/Genre3
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
      </Carousel.Item>
    </Carousel>
    </Container>
    </>
  );
}

export default RecomendedMovies;

// <Carousel
//      autoplay={true}
//      interval={5000}
//      controls={false}
//      indicators={false}
//      variant={'dark'}
// >