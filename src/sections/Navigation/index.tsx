import React, { useContext } from 'react';

import './style.css';
import { PortfolioContext } from '../../utils/hooks/useContext';
import { NavigationCollectionType } from '../../utils/helpers/types';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { navigation } = useContext(PortfolioContext) ?? [];
  const { data } = navigation ?? {};

  const { heading, collection = [] } = data ?? {};
  const { title = '', slug } = heading ?? {};
  const { current: titleLink = '' } = slug ?? {};

  return (
    <header>
      <nav>
        <a href={titleLink} className="logo">
          {title}
        </a>
        <ul className="navbar">
          {collection.length > 0 &&
            collection.map((navItem: NavigationCollectionType) => {
              return (
                <li key={navItem._key}>
                  <a href={navItem?.slug.current}>{navItem.title}</a>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
