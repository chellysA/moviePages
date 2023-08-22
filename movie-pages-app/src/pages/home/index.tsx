import Subtitle from '../../components/subtitle';
import Brief from '../../components/brief';
import Carousel from '../../components/carousel';
import React from 'react';
import Section from '../../components/section';
import Button from '../../components/button';
import { BsFillPlayFill } from 'react-icons/bs';
import FilmPosters from '../../components/filmPosters';

const Home = () => {
  return (
    <>
      <Carousel />
      <Brief />
      <Section>
        <div className="flex px-8 py-4">
          <Subtitle label="Trending" />
          <div className="flex justify-between w-[250px]">
            <Button
              label="Movies"
              icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
              border={true}
            />
            <Button
              label="TV Shows"
              icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
              border={true}
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="p-4">
          <FilmPosters />
        </div>
      </Section>
    </>
  );
};

export default Home;
