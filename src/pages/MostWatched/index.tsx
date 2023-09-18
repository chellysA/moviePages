import SortMenu from '../../components/Sort-menu';
import Subtitle from '../../components/Subtitle';
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
