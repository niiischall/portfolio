import React from 'react';
import { PortableText } from '@portabletext/react';

import type { TypedObject } from 'sanity';

export interface ContactProps {
  data: {
    heading: {
      title: TypedObject[];
    };
    text: TypedObject[];
    link: {
      text: string;
      href: string;
    };
  };
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const { heading, text = [] } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section
      className="px-4 pt-24 pb-24 md:px-8 flex flex-col justify-center items-start max-w-4xl md:mx-auto"
      id="contact"
    >
      <div className="pb-4 md:pb-8 max-w-2xl md:text-left">
        <PortableText value={title} />
      </div>
      <div className="pb-4 w-full text-left max-w-2xl md:text-left">
        <PortableText value={text} />
      </div>
    </section>
  );
};

export default Contact;
