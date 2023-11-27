import React from 'react';
import { navigationQuery } from '../../lib/sanity.queries';

import './style.css';
import { useReactQuery } from '../../utils/hooks/useCustomQuery';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { data, isLoading, error } = useReactQuery('navigation', navigationQuery);

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
