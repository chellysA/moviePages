import SortMenu from '../../components/Sort-menu';
import Subtitle from '../../components/Subtitle';
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
