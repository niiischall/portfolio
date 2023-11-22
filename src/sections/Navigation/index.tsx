import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import sanityClient from '../../lib/sanity.client';
import { navigationQuery } from '../../lib/sanity.queries';

import './style.css';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { data } = useQuery('navigation', () =>
    sanityClient
      .fetch(navigationQuery)
      .then((res) => res)
      .catch((err) => console.log(err)),
  );
  const { heading, collection = [] } = data ?? {};
  const { title = '', slug } = heading ?? {};
  const { current: titleLink = '' } = slug ?? {};

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleSidebarToggle = useCallback(() => {
    setShowSidebar((showSidebar) => !showSidebar);
  }, []);

  return (
    <header>
      <nav>
        <a href={titleLink} className="logo">
          {title}
        </a>
        <button className="bx bx-menu" id="menu-icon" onClick={handleSidebarToggle}></button>
        <ul className="navbar">
          {collection.map(
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
        {showSidebar ? (
          <ul className="sidebar">
            {collection.map(
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
                    <a href={navItem.slug.current}>{navItem.title}</a>
                  </li>
                );
              },
            )}
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Navigation;
