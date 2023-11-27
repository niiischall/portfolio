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

export const queries = [
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

export const initialState = {
  navigation: {
    data: {
      heading: {
        title: '',
        slug: {
          current: '',
        },
      },
      collection: [],
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  hero: {
    data: {
      socials: [],
      greeting: {
        link: {
          text: '',
          slug: {
            current: '',
          },
        },
        text: [],
      },
      cover: {
        asset: {
          _type: 'reference',
          _ref: '',
        },
        _type: 'image',
      },
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  about: {
    data: {
      heading: {
        title: [],
      },
      overview: [],
      cv: {
        link: '',
        title: '',
      },
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  work: {
    data: {
      heading: {
        title: [],
      },
      collection: [],
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  experiments: {
    data: {
      heading: {
        title: [],
      },
      collection: [],
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  writings: {
    data: {
      heading: {
        title: [],
      },
      collection: [],
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  talks: {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  contact: {
    data: {
      heading: {
        title: [],
      },
      text: [],
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  footer: {
    data: {
      heading: {
        title: [],
      },
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
};
