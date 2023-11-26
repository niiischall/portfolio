import React from 'react';
import { useQuery } from 'react-query';
import sanityClient from '../../lib/sanity.client';
import { contactQuery } from '../../lib/sanity.queries';

import './style.css';
import { PortableText } from '@portabletext/react';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { data } = useQuery('contact', () =>
    sanityClient
      .fetch(contactQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

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
