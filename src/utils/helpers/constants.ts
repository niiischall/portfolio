import {
  aboutQuery,
  contactQuery,
  experimentsQuery,
  footerQuery,
  heroQuery,
  navigationQuery,
  talksQuery,
  workQuery,
  writingsQuery,
} from '../../lib/sanity.queries';

export const QUERIES = [
  { key: 'navigation', endpoint: navigationQuery },
  { key: 'hero', endpoint: heroQuery },
  { key: 'about', endpoint: aboutQuery },
  { key: 'work', endpoint: workQuery },
  { key: 'experiments', endpoint: experimentsQuery },
  { key: 'writings', endpoint: writingsQuery },
  { key: 'talks', endpoint: talksQuery },
  { key: 'contact', endpoint: contactQuery },
  { key: 'footer', endpoint: footerQuery },
];
