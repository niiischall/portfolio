import React from 'react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '../../lib/sanity.image';
import type { HeroSocialType } from '../../utils/helpers/types';
import type { TypedObject } from 'sanity';
import Button from '../../components/Button';

export interface HeroProps {
  data: {
    socials: HeroSocialType[];
    greeting: {
      link: {
        text: string;
        slug: {
          current: string;
        };
      };
      text: TypedObject[];
    };
    cover: {
      asset: {
        _type: string;
        _ref: string;
      };
      _type: string;
    };
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { socials = [], greeting, cover = {} } = data ?? {};
  const { link, text: greetingText = [] } = greeting ?? {};
  const { text: buttonText = '', slug } = link ?? {};
  const { current: buttonSlug = '' } = slug ?? {};

  return (
    <section className="bg-light relative mx-auto px-4 pt-6 pb-12 md:px-8 md:pt-12 md:pb-48 " id="home">
      <div className="max-w-4xl flex flex-col items-start justify-start md:flex-row md:justify-start md:items-center md:space-x-6 lg:space-x-12 md:mx-auto">
        <div className="flex flex-col absolute top-15 left-4 md:relative">
          {socials.map((social: HeroSocialType) => {
            return (
              <Button
                key={social._key}
                styles="mb-6 md:w-12"
                onClick={() => {
                  window.open(social.url, '_blank');
                }}
                analyticsLabel={`social-${social.url}`}
              >
                <img src={urlForImage(social.cover)?.width(24).url()} alt={social.alt} />
              </Button>
            );
          })}
        </div>
        <div className="order-first md:order-2 flex justify-start pl-12 md:pl-0 lg:pl-12">
          <div className="hidden md:flex w-[300px] h-[300px]">
            <img src={urlForImage(cover)} alt="Profile" />
          </div>
          <div className="md:hidden">
            <img src={urlForImage(cover)?.height(200).width(200).url()} alt="Profile" />
          </div>
        </div>
        <div className="max-w-lg md:max-w-md mt-16 md:mt-0 lg:max-w-lg">
          <PortableText value={greetingText} />
          {buttonText ? (
            <Button
              styles="btn mt-8"
              onClick={() => {
                document.location.href = buttonSlug;
              }}
              analyticsLabel={`navigation-${buttonSlug}`}
            >
              {buttonText}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
