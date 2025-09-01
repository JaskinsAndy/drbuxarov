import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src="/drbuxarovmain.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-headline">{t('hero_headline')}</h1>
        <p className="hero-subheading">{t('hero_subheading')}</p>
        <button className="hero-button">{t('hero_cta_button')}</button>
      </div>
    </div>
  );
};

export default Hero;