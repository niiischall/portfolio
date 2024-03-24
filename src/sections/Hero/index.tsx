import React, { useContext } from 'react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '../../lib/sanity.image';
import { PortfolioContext } from '../../utils/hooks/useContext';
import { HeroSocialType } from '../../utils/helpers/types';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { hero } = useContext(PortfolioContext) ?? [];
  const { data } = hero ?? {};

  const { socials = [], greeting, cover = {} } = data ?? {};
  const { link, text: greetingText = [] } = greeting ?? {};
  const { text: buttonText = '', slug } = link ?? {};
  const { current: buttonSlug = '' } = slug ?? {};

  return (
    <section
      className="bg-light relative mx-auto flex flex-col items-start justify-start px-4 pt-6 pb-12 space-x-0 md:px-8 md:pt-8 md:pb-32 md:flex-row md:justify-center md:items-center md:space-x-6 lg:space-x-12"
      id="home"
    >
      <div className="flex flex-col absolute top-15 left-4 md:relative">
        {socials.map((social: HeroSocialType) => {
          return (
            <a
              key={social._key}
              href={social.url}
              target="_blank"
              className="mb-6 md:w-12"
              title={social.caption}
              rel="noopener noreferrer"
            >
              <img src={urlForImage(social.cover)?.width(24).url()} alt={social.alt} />
            </a>
          );
        })}
      </div>
      <div className="order-first md:order-2 flex justify-start pl-12 md:pl-0">
        <div className="hidden md:flex">
          <img src={urlForImage(cover)?.height(300).width(300).url()} alt="Profile" />
        </div>
        <div className="md:hidden">
          <img src={urlForImage(cover)?.height(200).width(200).url()} alt="Profile" />
        </div>
      </div>
      <div className="max-w-lg md:max-w-md mt-16 md:mt-0 lg:max-w-lg">
        <PortableText value={greetingText} />
        {buttonText ? (
          <a id="home-contact" href={buttonSlug} className="btn mt-8">
            {buttonText}
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
