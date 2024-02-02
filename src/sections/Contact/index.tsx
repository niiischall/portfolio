import React, { useContext } from 'react';

import { PortableText } from '@portabletext/react';
import { PortfolioContext } from '../../utils/hooks/useContext';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { contact } = useContext(PortfolioContext) ?? [];
  const { data } = contact ?? {};

  const { heading, text = [], link } = data ?? {};
  const { text: linkText, href: linkUrl } = link ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section
      className="pt-16 pb-32 px-[6%] md:px-0 flex flex-col justify-center items-start md:items-center"
      id="contact"
    >
      <div className="py-4 md:py-8 max-w-2xl md:text-center">
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
