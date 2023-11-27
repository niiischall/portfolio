import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import './style.css';
import { PortfolioContext } from '../../utils/hooks/useContext';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { footer } = useContext(PortfolioContext) ?? [];
  const { data } = footer ?? {};

  const { heading } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <footer className="footer">
      <PortableText value={title} />
    </footer>
  );
};

export default Footer;
