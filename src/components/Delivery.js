import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import biryani from '../images/foodImages/biryani.png';
import pizza from '../images/foodImages/pizza.png';
import chicken from '../images/foodImages/chicken.png'

function Delivery() {
  return (
    <div>
         <Container>
      <Row className='g-0'>
        <Col xs={6} md={4} className='p-5 d-flex justify-content-start'>
        <div className="d-flex flex-column align-items-start">
              {/* Image */}
              <Image src={biryani} rounded fluid className="w-50" />
              {/* Label below the image */}
              <label className='mt-2'>Biryani</label>
            </div>
        </Col>
        <Col xs={6} md={4} className='p-5 d-flex justify-content-start'>
        <div className='d-flex flex-column align-items-start'>
          <Image src={pizza} roundedCircle className='w-50 m-0' />
          <label className='mt-2'>Pizza</label>
          </div>
        </Col>
        <Col xs={6} md={4} className='p-5 '>
        <div className='d-flex flex-column align-items-center'>
          <Image src={chicken}  fluid  className='w-50 m-0'/>
          <label className='mt-2'>Chicken</label>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Delivery
