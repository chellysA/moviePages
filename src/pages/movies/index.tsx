import SortMenu from '../../components/sort-menu';
import Subtitle from '../../components/subtitle';
import React from 'react';

const Movies: React.FC = () => {
  return (
    <div className="pt-32 px-4">
      <Subtitle label="Movies"></Subtitle>
      <SortMenu />
    </div>
  );
};

export default Movies;
