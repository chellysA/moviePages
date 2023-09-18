import React, { ReactElement } from 'react';

interface ISectionProps {
  children: ReactElement;
}

const Section = ({ children }: ISectionProps) => {
  return <section>{children}</section>;
};

export default Section;
