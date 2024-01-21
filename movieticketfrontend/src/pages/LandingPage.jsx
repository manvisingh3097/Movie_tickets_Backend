import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Adjust the import path based on your project structure
import Content from '../components/Content/Content';
import Searchpanel from '../components/Searchpanel/Searchpanel';

import MovieList from '../components/Movieslist';

const LandingPage = () => {

  
 
    
  return (
    <>
      <Navbar />
      <Content/>
      <Searchpanel/>
      <MovieList/>
      

      

      



    </>
  );
};

export default LandingPage;