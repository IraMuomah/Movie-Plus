import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

function LiveEvents()  {
  return (
    <>
    <Container fluid className="bg-light">
    <h2>Best Of Live Events</h2>
    <Carousel indicators={false} className="p-2  bg-light">
      <Carousel.Item >
        <CardGroup style={{gap:"20px"}} >
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
        </CardGroup>
      </Carousel.Item>

      <Carousel.Item>
        <CardGroup style={{gap:"20px"}}>
        <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic2.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic2.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic2.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic2.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>          
            <Card className="border-0 text-white">
                <Card.Img src="./sqr_pic2.PNG" alt="Card image" />
                <Card.ImgOverlay>
                    {/* <Card.Title>Event Type</Card.Title><Card.Text> 99+ Events </Card.Text> */}
                    {/* This image i used already has an overlay so no need for an actual one */}
                </Card.ImgOverlay>
            </Card>  
        </CardGroup>
      </Carousel.Item>
    </Carousel>
    </Container>
    </>
  );
}

export default LiveEvents;

// <Carousel
//      autoplay={true}
//      interval={5000}
//      controls={false}
//      indicators={false}
//      variant={'dark'}
// >