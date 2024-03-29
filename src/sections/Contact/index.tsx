import React from 'react';
import { PortableText } from '@portabletext/react';

import { useContact } from '../../utils/hooks/usePortfolioContext';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { title, text, linkText, linkUrl } = useContact();

  return (
    <section className="px-4 pt-12 pb-24 md:px-8 flex flex-col justify-center items-start md:items-center" id="contact">
      <div className="pb-4 md:pb-8 max-w-2xl md:text-center">
        <PortableText value={title} />
      </div>
      <div className="pb-4 w-full text-left max-w-2xl md:text-center">
        <PortableText value={text} />
      </div>
      <a id="contact-link" href={linkUrl} className="btn">
        {linkText} &rarr;
      </a>
    </section>
  );
};

export default Contact;
