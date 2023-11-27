import React from 'react';
import { PortableText } from '@portabletext/react';

import './style.css';
import { footerQuery } from '../../lib/sanity.queries';
import { useReactQuery } from '../../utils/hooks/useCustomQuery';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { data, isLoading, error } = useReactQuery('footer', footerQuery);

  const { heading } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <footer className="footer">
      <PortableText value={title} />
    </footer>
  );
};

export default Footer;
