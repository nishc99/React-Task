import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./home.css"

function Home() {
      return (
        <div>
        <Card className='card1'>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" />
          <Card.Body>
            <Card.Title>Nike Shoes</Card.Title>
            <Card.Text>
              Price: Rs3500
            </Card.Text>
            <Button href='https://www.flipkart.com/search?q=sports%20shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' variant="primary">Click For Page</Button>
          </Card.Body>
        </Card>
        <Card className='card1'>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg" />
          <Card.Body>
            <Card.Title>Sports Shoes</Card.Title>
            <Card.Text>
              Price: Rs2000
            </Card.Text>
            <Button href='https://www.flipkart.com/search?q=sports%20shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' variant="primary">Click For Page</Button>
          </Card.Body>
        </Card>
        <Card className='card1'>
          <Card.Img variant="top" src="https://5.imimg.com/data5/NS/IB/CH/SELLER-2784282/paragon-men-brown-flats-1000x1000.jpeg" />
          <Card.Body>
            <Card.Title>Sandal</Card.Title>
            <Card.Text>
              Price: Rs1000
            </Card.Text>
            <Button href='https://www.flipkart.com/search?q=sandal&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' variant="primary">Click For Page</Button>
          </Card.Body>
        </Card>
        <Card className='card1'>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81E6+Zpvo1L._UX500_.jpg" />
          <Card.Body>
            <Card.Title>Paragon Sandal</Card.Title>
            <Card.Text>
              Price: Rs1000
            </Card.Text>
            <Button href='https://www.flipkart.com/search?q=sandal&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' variant="primary">Click For Page</Button>
          </Card.Body>
        </Card>
        <Card className='card1'>
          <Card.Img variant="top" src="https://tiimg.tistatic.com/fp/1/007/776/soft-lightweight-material-pu-ladies-sleeper-for-party-and-regular-wear-214.jpg"/>
          <Card.Body>
            <Card.Title>Ladies Sleeper</Card.Title>
            <Card.Text>
              Price: Rs700
            </Card.Text>
            <Button href='https://www.flipkart.com/search?q=ladies%20sandal&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' variant="primary">Click For Page</Button>
          </Card.Body>
        </Card>
        <Card className='card1'>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81FsxqQcK8L._UL1500_.jpg" />
          <Card.Body>
            <Card.Title>Ladies Regular Sleeper</Card.Title>
            <Card.Text>
              Price: Rs500
            </Card.Text>
            <Button href='https://www.flipkart.com/search?q=ladies%20sandal&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off' variant="primary" src="https://www.flipkart.com/">Click For Page</Button>
          </Card.Body>
        </Card>
    </div>
      );
    }
    
    export default Home;










