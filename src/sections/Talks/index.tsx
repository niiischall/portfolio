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

  return (
    <section className="talks" id="talks">
      <div className="heading">
        <h2 className="font-sans">&nbsp;</h2>
      </div>
    </section>
  );
};

export default Talks;
