import React from 'react';
import ScrollNavigation from '../../layout/ScrollNavigation/ScrollNavigation';
import ListMovie from '../../layout/ListMovie/ListMovie';
import Block from '../../components/Block/Block';
import Offer from '../../layout/Offer/Offer';
import Banner from '../../layout/Banner/Banner';

const HomePage = () => {
  return (
    <>
      <Banner />
      <ScrollNavigation />

      <ListMovie id="now-showing" label="Now Showing" />
      <ListMovie id="coming-soon" label="Coming Soon" />

      <Offer id="offer" />
    </>
  );
};

export default HomePage;
