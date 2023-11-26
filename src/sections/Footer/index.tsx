import React from 'react';
import { useQuery } from 'react-query';
import { PortableText } from '@portabletext/react';
import sanityClient from '../../lib/sanity.client';
import { footerQuery } from '../../lib/sanity.queries';

import './style.css';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { data } = useQuery('footer', () =>
    sanityClient
      .fetch(footerQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  const { heading } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <footer className="footer">
      <PortableText value={title} />
    </footer>
  );
};

export default Footer;
