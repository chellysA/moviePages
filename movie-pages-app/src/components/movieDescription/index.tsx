import React from 'react';
import Button from '../button';
import { BsFillPlayFill } from 'react-icons/bs';

const MovieDescription = () => {
  return (
    <div className="absolute bottom-[60px] px-8">
      <h1></h1>
      <div></div>
      <p></p>
      <Button
        icon={<BsFillPlayFill className="h-[30px] w-[30px] pb-2" />}
        label="Whatch now"
        border={true}
      />
    </div>
  );
};

export default MovieDescription;
