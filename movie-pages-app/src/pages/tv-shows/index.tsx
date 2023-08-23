import SortMenu from '../../components/sort-menu';
import Subtitle from '../../components/subtitle';
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
