import React, { useContext } from 'react';

import { PortableText } from '@portabletext/react';
import { PortfolioContext } from '../../utils/hooks/useContext';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { contact } = useContext(PortfolioContext) ?? [];
  const { data } = contact ?? {};

  const { heading, text = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section className="flex flex-col justify-center items-start md:items-center" id="contact">
      <div className="text-3xl px-0 py-4 md:px-36 md:py-8 text-left md:text-center">
        <PortableText value={title} />
      </div>
      <div className="w-full my-10 text-left text-md md:text-center">
        <PortableText value={text} />
      </div>
    </section>
  );
};

export default Contact;
