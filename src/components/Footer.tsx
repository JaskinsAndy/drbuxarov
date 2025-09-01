import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Dr. Buxarov</h5>
            <p>{t('footer_copyright')}</p>
          </Col>
          <Col md={4}>
            <h5>{t('footer_contact_title')}</h5>
            <ul className="list-unstyled">
              <li>{t('footer_contact_email')}</li>
              <li>{t('footer_contact_phone')}</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>{t('footer_follow_title')}</h5>
            <a href="#" className="me-2"><FaFacebook /></a>
            <a href="#" className="me-2"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;