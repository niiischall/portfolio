import React from 'react';
import { useQuery } from 'react-query';
import sanityClient from '../../lib/sanity.client';
import { talksQuery } from '../../lib/sanity.queries';

import './style.css';

export interface TalksProps {}

const Talks: React.FC<TalksProps> = () => {
  const { data } = useQuery('talks', () =>
    sanityClient
      .fetch(talksQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  return null;
};

export default Talks;
