// I install npm install react-bootstrap bootstrap  & react-router-hash-link


import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/logo.png';
import linkedin from '../assets/nav-icon1.svg';
import facebook from '../assets/nav-icon2.svg';
import instagram from '../assets/nav-icon3.svg';
import gamil from '../assets/icons8-gmail-64.svg';

import shop from '../assets/shop-svgrepo-com.svg';
import leaf from '../assets/leaf-svgrepo-com.svg';


import { HashLink } from 'react-router-hash-link';


import './Nav.css'

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBarF = () => {


  //LINK  To find which Part You in (Skills  ,  Projects  , COntact US)

  //SCROLLED  To find weather page is scrolled to useEffect on it
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  //Make Navbar Go Up whenpage is scrolled
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }



  const [activeLink1, setActiveLink1] = useState();

  const onUpdateActiveLink1 = (value1) => {
    setActiveLink1(value1);
  }




  function HoverLink({ url, imageSource }) {
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {}, [isHovered, url]);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div>
        <a
        href={url}
        target="_blank"
        className={activeLink1 === url ? 'active' : ''}
        onClick={() => onUpdateActiveLink1()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
           <img src={imageSource} alt="" />
        </a>
      </div>
    );


  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           <a href="#home"> {/*i add this href only */}
            {/* <img src={logo} alt="Logo" /> */}
          </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
              <Nav.Link href="/gallary" className={activeLink === 'gallary' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallary')}>GALLARY</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">

                {/* HoverLink It open after 3 seconds when mouse is on it for 3 second */}
                <div className="social-icon1">
                <div className="leaf">
                    {/* <HoverLink url="/shop" imageSource={ shop } ></HoverLink> */}
                    <HoverLink imageSource={leaf}>
                      <Nav.Link href="/aboutus" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} > </Nav.Link>
                    </HoverLink>
                    
                  </div>
                  <div className="shop">
                    <HoverLink url="https://liyontatea.lk/" imageSource={ shop } ></HoverLink>
                  </div>
                </div>
              </div>
              <HashLink to='/contactus'>
                <button className="vvd"><span>Contact Us</span></button>
              </HashLink>  
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}


