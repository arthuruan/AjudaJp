import React from 'react';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import SearchLocation from '../../components/SearchLocation';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Apresentation />
      <SearchLocation />
    </>
  );
}

export default Home;