import useGetVideos from '../../hooks/api/useGetVideos';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Overview = () => {
  const { id }: any = useParams();
  const { videos } = useSelector<any, any>((state) => state.movies);
  const { getVideos } = useGetVideos(id);

  useEffect(() => {
    getVideos();
  }, [id]);

  return (
    <>
      <iframe
        id="video"
        src={`https://www.youtube-nocookie.com/embed/${
          videos?.filter((e: any) => {
            return e.type === 'Trailer';
          })[0].key
        }?rel=0&amp;controls=0&amp;showinfo=0`}
      ></iframe>
    </>
  );
};

export default Overview;
