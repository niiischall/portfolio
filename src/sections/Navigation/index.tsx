import React, { useContext } from 'react';

import { PortfolioContext } from '../../utils/hooks/useContext';
import { NavigationCollectionType } from '../../utils/helpers/types';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { navigation } = useContext(PortfolioContext) ?? [];
  const { data } = navigation ?? {};

  const { heading, collection = [] } = data ?? {};
  const { title = '', slug } = heading ?? {};
  const { current: titleLink = '' } = slug ?? {};

  const renderNavigationItems = () => {
    let renderedList = null;
    if (collection.length > 0) {
      renderedList = collection.map((navItem: NavigationCollectionType) => {
        return (
          <li key={navItem._key}>
            <a
              className="text-xl font-sans font-bold px-4 py-8 text-primary hover:text-secondary"
              href={navItem?.slug.current}
            >
              {navItem.title}
            </a>
          </li>
        );
      });
    }
    return renderedList;
  };

  return (
    <header className="fixed w-full top-0 left-0 z-10">
      <nav className="flex justify-start items-center bg-light px-8 py-4 md:px-36 md:py-8 md:justify-between">
        <a href={titleLink} className="text-3xl font-sans font-bold text-primary">
          {title}
        </a>
        <ul className="hidden lg:flex">{renderNavigationItems()}</ul>
      </nav>
    </header>
  );
};

export default Navigation;
