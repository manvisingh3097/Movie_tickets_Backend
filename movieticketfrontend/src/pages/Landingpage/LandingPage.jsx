import React from 'react';
import Navbar from '../../components/Navbar/Navbar'; // Adjust the import path based on your project structure
import Content from '../../components/Content/Content';
import Searchpanel from '../../components/Searchpanel/Searchpanel.jsx';

import MovieList from '../../components/Movielist/Movieslist.jsx';

const LandingPage = () => {

  
 
    
  return (
    <>
      <Navbar />
      <Content/>
      
      <MovieList/>
      

      

      



    </>
  );
};

export default LandingPage;