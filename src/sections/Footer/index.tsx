import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import { PortfolioContext } from '../../utils/hooks/useContext';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { footer } = useContext(PortfolioContext) ?? [];
  const { data } = footer ?? {};

  const { heading } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <footer className="pt-16 pb-32 flex justify-center items-center bg-light">
      <PortableText value={title} />
    </footer>
  );
};

export default Footer;
