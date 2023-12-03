import React, { useCallback, useContext } from 'react';

import { PortfolioContext } from '../../utils/hooks/useContext';
import { NavigationCollectionType } from '../../utils/helpers/types';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { navigation } = useContext(PortfolioContext) ?? [];
  const { data } = navigation ?? {};

  const { collection = [] } = data ?? {};

  const toggleMobileMenuShow = useCallback(() => {
    console.log('toggle mobile menu...');
  }, []);

  const renderNavigationItems = () => {
    let renderedList = null;
    if (collection.length > 0) {
      renderedList = collection.map((navItem: NavigationCollectionType) => {
        return (
          <li key={navItem._key}>
            <a
              className="text-xl font-sans font-bold px-4 text-primary hover:text-secondary duration-200"
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
    <header className="fixed w-full top-0 left-0 z-50">
      <nav className="flex justify-end items-center p-8">
        <ul className="hidden lg:flex">{renderNavigationItems()}</ul>
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="hamburger z-50 block md:hidden focus:outline-none"
            onClick={toggleMobileMenuShow}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
