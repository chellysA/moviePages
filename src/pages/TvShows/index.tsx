import useGetTvShows from '../../hooks/api/useGetTVShows';
import SortMenu from '../../components/Sort-menu';
import Subtitle from '../../components/Subtitle';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TVShows = () => {
  const { getTvShows } = useGetTvShows();
  const { tvShows } = useSelector<any, any>((state) => {
    state.tvShows;
  });

  useEffect(() => {
    getTvShows();
  }, []);

  console.log(tvShows);
  return (
    <div className="pt-32 px-4">
      <Subtitle label="TV Shows"></Subtitle>
      <SortMenu />
    </div>
  );
};

export default TVShows;
