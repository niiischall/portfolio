import React from 'react';

import './style.css';
import { talksQuery } from '../../lib/sanity.queries';
import { useReactQuery } from '../../utils/hooks/useCustomQuery';

export interface TalksProps {}

const Talks: React.FC<TalksProps> = () => {
  const { data, isLoading, error } = useReactQuery('talks', talksQuery);

  return <div id="talks">{null}</div>;
};

export default Talks;
