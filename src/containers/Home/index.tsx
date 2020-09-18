import React from 'react';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import PageMap from '../../components/PageMap';
import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Apresentation />
      <PageMap />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Home;