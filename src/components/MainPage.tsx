import React from 'react';
import CustomNavbar from './Navbar';
import Hero from './Hero';

import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import BeforeAfterCard from './BeforeAfterCard';
import { Container, Row, Col } from 'react-bootstrap';
import Reviews from './Reviews';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <CustomNavbar />
      <Hero />
      
      <Services />
      <div id="our-work" className="our-work">
        <Container>
          <h2 className="text-center">{t('work_title')}</h2>
          <Row className="justify-content-center">
            <Col md="auto" className="mb-3">
              <BeforeAfterCard title={t('work_caries')} />
            </Col>
            <Col md="auto" className="mb-3">
              <BeforeAfterCard title={t('work_whitening')} />
            </Col>
            <Col md="auto" className="mb-3">
              <BeforeAfterCard title={t('work_gum')} />
            </Col>
          </Row>
        </Container>
      </div>
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;