import React from 'react';
import { useQuery } from 'react-query';
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

  console.log('footer: ', data);
  return (
    <footer className="footer">
      <p>
        &#xA9; designed and built by
        <span className="footer-name">nischal nikit</span>
      </p>
    </footer>
  );
};

export default Footer;
