import React from 'react';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import SearchLocation from '../../components/SearchLocation';
import PageMap from '../../components/PageMap';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Apresentation />
      <PageMap />
    </>
  );
}

export default Home;