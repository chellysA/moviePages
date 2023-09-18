import SortMenu from '../../components/sort-menu';
import Subtitle from '../../components/subtitle';
import React from 'react';

const CommingSoon = () => {
  return (
    <div className="pt-32 px-4">
      <Subtitle label="Comming Soon"></Subtitle>
      <SortMenu />
    </div>
  );
};

// TODO Cambiar el nombre de las carpetas de pages y la de componentes a Camelcase
export default CommingSoon;
