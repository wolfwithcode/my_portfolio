import React from 'react';
import './header.styles.scss';
import {Navbar, Nav} from 'react-bootstrap';
import {HashLink as NavLink} from 'react-router-hash-link';

const Header = () => {
    return (
        <section className='header_nav'>
            <Navbar expand="lg" bg="light"  fixed='top'>
                <Navbar.Brand className="nav_brand">
                    <a href='/'>
                        Anh's 
                        <span style={{color: '#A30B37', marginLeft: '0.5rem', fontSize: '2rem'}}>Home</span>
                    </a>                   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ml-auto menu-items">
                        <NavLink className='d-inline p-2 menu-item' smooth to='/'>Home</NavLink>
                        <NavLink className='d-inline p-2 menu-item' smooth to='/#projects_section'>Projects</NavLink>
                        <NavLink className='d-inline p-2 menu-item' smooth to='/#experience_section'>Experience</NavLink>
                        <NavLink className='d-inline p-2 menu-item' smooth to='/#technical_section'>Technical Skills</NavLink>
                        <NavLink className='d-inline p-2 menu-item' smooth to='/#about_me_section'>About me</NavLink>
                        <NavLink className='d-inline p-2 menu-item' smooth to='/#contact_section'>Contact</NavLink >
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    )
};

export default Header;