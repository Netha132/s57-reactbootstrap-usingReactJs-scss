import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/zomatologo.png';
import dineLogo from '../images/dineLogo.png';
import deliverylogo from '../images/deliverylogo.png';
import nightlyfLogo from '../images/nightlyflogo.png';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function ReactBootstrap() {
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <img src={logo} alt='logo' className='logo' ></img>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link to="/">Log in</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        {/* =======BreadCrumbs======== */}
        <Breadcrumb>
      <Breadcrumb.Item  href="#" className='bread'>Home</Breadcrumb.Item>
      <Breadcrumb.Item  href="#" className='bread'>India</Breadcrumb.Item>
      <Breadcrumb.Item  href='#' className='bread'>Hyderabad</Breadcrumb.Item>
      <Breadcrumb.Item  href='#' className='bread'>Hitech city restaurants</Breadcrumb.Item>
    </Breadcrumb>


    {/* navbar */}

    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>

        <Nav.Link href="./DineOut" to='/dine' className='eveNav'><img src={dineLogo} className='dineLogo' alt='dineLogo'></img>Dining Out</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/Delivery' to='/delivery' className='eveNav'><img src={deliverylogo} className='dineLogo' alt='dineLogo'></img>Delivery</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/Nightlife' to='/nightlife' className='eveNav'><img src={nightlyfLogo} className='dineLogo' alt='dineLogo'></img>Nightlife</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default ReactBootstrap
