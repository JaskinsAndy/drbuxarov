import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container id="contact" className="contact">
      <h2 className="text-center">{t('contact_title')}</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>{t('contact_name_label')}</Form.Label>
              <Form.Control type="text" placeholder={t('contact_name_placeholder')} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>{t('contact_email_label')}</Form.Label>
              <Form.Control type="email" placeholder={t('contact_email_placeholder')} />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>{t('contact_message_label')}</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder={t('contact_message_placeholder')} />
            </Form.Group>

            <Button variant="primary" type="submit">
              {t('contact_submit_button')}
            </Button>
          </Form>
        </Col>
      </Row>
       <Row className="mt-5">
        <Col>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=у-л Мухандислар, Тоshkent, Toshkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;