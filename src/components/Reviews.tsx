import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface Review {
  name: string;
  review: string;
  stars: number;
}

const CustomPrevIcon = <span className="carousel-control-prev-icon-custom"><FaChevronLeft /></span>;
const CustomNextIcon = <span className="carousel-control-next-icon-custom"><FaChevronRight /></span>;

const Reviews = () => {
  const { t } = useTranslation();
  const reviews: Review[] = t('reviews_list', { returnObjects: true });

  return (
    <Container id="reviews" className="py-5 bg-light">
      <h2 className="text-center mb-5">{t('reviews_title')}</h2>
      <Carousel indicators={false} prevIcon={CustomPrevIcon} nextIcon={CustomNextIcon}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Card className="text-center mx-auto" style={{ maxWidth: '800px' }}>
              <Card.Body>
                <div className="d-flex justify-content-center mb-3">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} color="#ffc107" />
                    ))}
                </div>
                <Card.Text>"{review.review}"</Card.Text>
                <footer className="blockquote-footer mt-auto">{review.name}</footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Reviews;
