
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setShow(true);
            }
            else { setShow(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
        <Navbar expand="lg" className={show ? "show" : ""}>
          <Container xs={12} md={6} xl={12} lg={12} className='navbarmain' >
            <Navbar.Brand className='navbar-logo' href="#home">
              <img src={logo} alt="logo" className='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='mob-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About&nbsp;me</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('exxperience')}>Experience</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact&nbsp;me</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='d-flex align-items-center'>
                  <a href=""><i className='fa fa-mug-hot fa-lg me-3'></i> Let&apos;s&nbsp;Connect</a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
export default NavBar;