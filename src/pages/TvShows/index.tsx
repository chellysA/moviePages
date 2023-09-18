import SortMenu from '../../components/Sort-menu';
import Subtitle from '../../components/Subtitle';
import React from 'react';

const TVShows = () => {
  return (
    <div className="pt-32 px-4">
      <Subtitle label="TV Shows"></Subtitle>
      <SortMenu />
    </div>
  );
};

export default TVShows;
