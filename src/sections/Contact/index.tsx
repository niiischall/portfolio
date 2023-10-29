import React from 'react';
import { useQuery } from 'react-query';
import sanityClient from '../../lib/sanity.client';
import { contactQuery } from '../../lib/sanity.queries';

import './style.css';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { data } = useQuery('contact', () =>
    sanityClient
      .fetch(contactQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );

  console.log('contact: ', data);
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h2 className="font-sans">get in touch with me</h2>
      </div>
      <div className="contact-container container-spacing">
        <p>If you want to work together or just say hi, my DMs are open. 😊</p>
      </div>
    </section>
  );
};

export default Contact;
