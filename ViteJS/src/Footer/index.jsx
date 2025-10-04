import React  from 'react';
import { useState, useEffect } from "react";
// import './styles.css';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import Grid from '@mui/material/Grid';
import { Nav } from 'react-bootstrap';


import shop from '../assets/shop-svgrepo-com.svg';
import leaf from '../assets/leaf-svgrepo-com.svg';


import facebook from '../assets/nav-icon2.svg';
import instagram from '../assets/nav-icon3.svg';

import './foot.css';


const Footer = () => {


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



  const [activeLink1, setActiveLink1] = useState('home');

  const onUpdateActiveLink1 = (value1) => {
    setActiveLink1(value1);
  }



  function HoverLink({ url, imageSource }) {
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      let hoverTimeout;
  
      if (isHovered) {
        hoverTimeout = setTimeout(() => {
          window.open(url, '_blank');
        }, 3000); // 3 seconds
      }
  
      return () => {
        clearTimeout(hoverTimeout);
      };
    }, [isHovered, url]);
  
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
    <footer className='footer'>

      <div className='foot'>
        <div className='container'>


          <div className='front'>


            <div className='logo'>
              <img src='/logo.png' alt='logo' />
            </div>

            <div className="social-icon">
              <div className="social-icon1">
                <div>
                  <HoverLink url="https://www.facebook.com/liyonta" imageSource={facebook} ></HoverLink>
                </div>
                <div>
                  <HoverLink url="https://www.instagram.com/liyontatea/" imageSource={instagram} ></HoverLink>
                </div>
              </div>
            </div>


          </div>
          

          



          <div className='row'>
            <div className='col'>
              <div className='links'>
                <Nav.Link href='/' className='home' onClick={() => onUpdateActiveLink('home')} > Home </Nav.Link>
                <Nav.Link href='/' className='gallery' onClick={() => onUpdateActiveLink('gallery')} > Gallery </Nav.Link>
                <Nav.Link href='/' className='about' onClick={() => onUpdateActiveLink('about')} > About Us </Nav.Link>
                <Nav.Link href='/' className='contact' onClick={() => onUpdateActiveLink('contact')} > Contact Us </Nav.Link>
                <Nav.Link href='/' className='shop' onClick={() => onUpdateActiveLink('shop')} > Shop </Nav.Link>
              </div>
            </div>

            


            <div className='col'>
              <div className='location'>
                <p>Liyonta Tea Factory, <br/> Dangala, <br/> Alapaladeniya. <br/> +(94) 41 228 2268  <br/> info@liyontatea.com </p>
              </div>
            </div>
            <div className='col'>

              

            </div>
            <div className='col'></div>
            <div className='col'></div>
          </div>
        </div>
        
      </div>





      <div className='footerhr'>
        {/* <hr className='footerhr' /> */}
        <p className="footer-text">2024 Liyonta Tea 1.1. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;