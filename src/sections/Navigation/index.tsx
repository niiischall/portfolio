import React, { useContext } from 'react';

import './style.css';
import { PortfolioContext } from '../../utils/hooks/useContext';

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
            collection.map(
              (navItem: {
                _key: number;
                title: string;
                slug: {
                  _type: 'slug';
                  current: string;
                };
              }) => {
                return (
                  <li key={navItem._key}>
                    <a href={navItem?.slug.current}>{navItem.title}</a>
                  </li>
                );
              },
            )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
