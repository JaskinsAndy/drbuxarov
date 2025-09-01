
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const CustomNavbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">Dr. Buxarov</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">{t('nav_home')}</Nav.Link>
            <Nav.Link href="#about">{t('nav_about')}</Nav.Link>
            <Nav.Link href="#services">{t('nav_services')}</Nav.Link>
            <Nav.Link href="#our-work">{t('nav_work')}</Nav.Link>
            <Nav.Link href="#reviews">{t('nav_reviews')}</Nav.Link>
            <Nav.Link href="#contact">{t('nav_contact')}</Nav.Link>
            <LanguageSelector />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
