import React from 'react';
import { PortableText } from '@portabletext/react';
import { FooterNavigationCollectionType, FooterSocialType } from '../../utils/helpers/types';
import { urlForImage } from '../../lib/sanity.image';
import type { TypedObject } from 'sanity';
import Button from '../../components/Button';

export interface FooterProps {
  data: {
    heading: {
      title: TypedObject[];
    };
    email: string;
    copyright: string;
    socials: FooterSocialType[];
    collection: FooterNavigationCollectionType[];
  };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const { email = '', copyright, socials, collection, heading } = data ?? {};
  const { title = [] } = heading ?? {};

  return (
    <footer className="px-4 pt-12 pb-24 md:px-8 bg-light">
      <div className="flex flex-col space-y-16 max-w-4xl mx-auto justify-between items-start md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 text-left p-0">
            <Button
              onClick={() => {
                document.location.href = '/#';
              }}
              styles="text-2xl font-sans font-bold text-secondary text-left"
              analyticsLabel={`footer-${title}`}
            >
              <PortableText value={title} />
            </Button>
            <p className="text-sm font-ovo text-primary">{email}</p>
            <p className="text-sm font-ovo text-primary">{copyright}</p>
          </div>
          <div className="flex space-x-3 mt-4">
            {socials?.map((social: FooterSocialType) => {
              return (
                <Button
                  key={social._key}
                  onClick={() => window.open(social.url, '_blank')}
                  analyticsLabel={`footer-${social.caption}`}
                >
                  <img src={urlForImage(social.cover)?.width(24).url()} alt={social.alt} />
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-4 text-left md:text-right">
          {collection?.map((navItem: FooterNavigationCollectionType) => {
            return (
              <div key={navItem._key}>
                <Button
                  styles="text-lg font-bold font-sans text-primary"
                  onClick={() => (document.location.href = navItem?.slug.current)}
                  analyticsLabel={`footer-${navItem.title}`}
                >
                  {navItem.title}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
