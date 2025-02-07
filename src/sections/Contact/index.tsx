import React from 'react';
import { PortableText } from '@portabletext/react';

import type { TypedObject } from 'sanity';
import Button from '../../components/Button';

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
  const { heading, text = [], link } = data ?? {};
  const { text: linkText, href: linkUrl } = link ?? {};
  const { title = [] } = heading ?? {};

  return (
    <section className="px-4 pt-12 pb-24 md:px-8 flex flex-col justify-center items-start md:items-center" id="contact">
      <div className="pb-4 md:pb-8 max-w-2xl md:text-center">
        <PortableText value={title} />
      </div>
      <div className="pb-4 w-full text-left max-w-2xl md:text-center">
        <PortableText value={text} />
      </div>
      <Button
        onClick={() => {
          window.open(linkUrl, '_blank');
        }}
        styles="btn"
        analyticsLabel={`contact-${title}`}
      >
        {linkText} &rarr;
      </Button>
    </section>
  );
};

export default Contact;
