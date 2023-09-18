import SortMenu from '../../components/sort-menu';
import Subtitle from '../../components/subtitle';
import React from 'react';

const MostWatched = () => {
  return (
    <div className="pt-32 px-4">
      <Subtitle label="Most Watched"></Subtitle>
      <SortMenu />
    </div>
  );
};

export default MostWatched;
