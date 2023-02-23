import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeroImage from '../../../public/images/hero.svg';

import Hero from './Hero';
const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Hero
        description=" If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment."
        title="Guaranteed Wins £10M+ Prizes Given Out Pursuit Your Dream"
        featureImage={HeroImage}
      />
      <Hero
        description=" If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment."
        title="Guaranteed Wins £10M+ Prizes Given Out Pursuit Your Dream"
        featureImage={HeroImage}
      />
      <Hero
        description=" If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment."
        title="Guaranteed Wins £10M+ Prizes Given Out Pursuit Your Dream"
        featureImage={HeroImage}
      />
    </Slider>
  );
};

export default HomeSlider;
