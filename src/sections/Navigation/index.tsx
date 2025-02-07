import React, { useCallback, useState } from 'react';
import { NavigationCollectionType } from '../../utils/helpers/types';
import Button from '../../components/Button';

export interface NavigationProps {
  data: {
    heading: {
      title: string;
      slug: {
        current: string;
      };
    };
    collection: NavigationCollectionType[];
  };
}

const Navigation: React.FC<NavigationProps> = ({ data }) => {
  const { collection = [] } = data ?? {};
  const [menuShowcase, setMenuShowcase] = useState<boolean>(false);

  const toggleMobileMenuShow = useCallback(() => {
    setMenuShowcase((prevMenuShowcase) => !prevMenuShowcase);
  }, []);

  const navigateToSection = useCallback(
    (slug: string) => {
      document.location.href = `${slug}`;
      toggleMobileMenuShow();
    },
    [toggleMobileMenuShow],
  );

  const renderMobileNavigationItems = () => {
    let renderedList = null;
    if (collection.length > 0) {
      renderedList = collection.map((navItem: NavigationCollectionType) => {
        return (
          <li key={navItem._key}>
            <Button
              styles="text-2xl font-sans font-bold px-4 text-primary hover:text-secondary duration-200"
              onClick={() => navigateToSection(navItem?.slug.current)}
              analyticsLabel={`navigation-${navItem?.slug.current}`}
            >
              {navItem.title}
            </Button>
          </li>
        );
      });
    }
    return renderedList;
  };

  const renderNavigationItems = () => {
    let renderedList = null;
    if (collection.length > 0) {
      renderedList = collection.map((navItem: NavigationCollectionType) => {
        return (
          <li key={navItem._key}>
            <div className="flex flex-col items-center">
              <Button
                styles="text-xl font-sans font-bold px-4 text-primary hover:text-secondary duration-200"
                onClick={() => {
                  document.location.href = navItem?.slug.current;
                }}
                analyticsLabel={`navigation-${navItem?.slug.current}`}
              >
                {navItem.title}
              </Button>
            </div>
          </li>
        );
      });
    }
    return renderedList;
  };

  return (
    <header className="relative flex justify-end items-center p-0 px-4 py-8 md:px-8 md:py-12">
      <nav className="flex justify-end items-center max-w-4xl md:mx-auto">
        <ul className="space-x-2 hidden md:flex">{renderNavigationItems()}</ul>
        <div className="md:hidden">
          <Button
            styles={`hamburger z-50 block md:hidden focus:outline-none ${menuShowcase ? 'open' : ''}`}
            onClick={toggleMobileMenuShow}
            analyticsLabel="navigation-mobile"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </Button>
        </div>
      </nav>
      {menuShowcase ? (
        <div id="menu-banner" className="z-40 absolute top-0 left-0 space-y-4 bg-light w-full h-screen">
          <ul className="flex flex-col w-full h-full space-y-8 justify-center items-center">
            {renderMobileNavigationItems()}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
