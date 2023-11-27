import React, { useContext } from 'react';

import './style.css';
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
      <div className="heading text-left md:text-center p-0 ml-5 md:ml-0">
        <PortableText value={title} />
      </div>
      <div className="contact-container w-full my-10 pl-5 pr-5 md:pl-0 md:pr-0 text-left md:text-center">
        <PortableText value={text} />
      </div>
    </section>
  );
};

export default Contact;
