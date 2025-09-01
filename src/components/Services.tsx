import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaTooth, FaStethoscope, FaRegSmileBeam } from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation();
  const services: string[] = t('services_list', { returnObjects: true }) as string[];
  const icons = [<FaTooth size={50} />, <FaStethoscope size={50} />, <FaRegSmileBeam size={50} />];

  return (
    <Container id="services" className="services">
      <h2 className="text-center">{t('services_title')}</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="service-card text-center">
              <Card.Body>
                <div className="mb-3">{icons[index]}</div>
                <Card.Title>{service}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;