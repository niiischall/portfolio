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
    <footer className="min-h-[25vh] flex justify-center items-center bg-primary text-gray">
      <PortableText value={title} />
    </footer>
  );
};

export default Footer;
