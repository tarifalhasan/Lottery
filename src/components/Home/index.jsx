import React from 'react';
import HomeSlider from './HomeSlider';
import Campaigns from './Campaigns';
import Banner from './Banner';
import LiveCampaigns from './LiveCampaigns';
import Winners from './Winners';
import HowPlay from './HowPlay';

const Home = () => {
  return (
    <>
      <HomeSlider />

      <Campaigns />
      <Banner />
      <LiveCampaigns />
      <Winners />
      <HowPlay />
    </>
  );
};

export default Home;
