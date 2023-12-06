import type { TypedObject, Image } from 'sanity';

///////// Navigation
export type NavigationCollectionType = {
  _key: number;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
};

export interface NavigationContextType {
  data: {
    heading: {
      title: string;
      slug: {
        current: string;
      };
    };
    collection: NavigationCollectionType[];
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

//////// Hero Section
export type HeroSocialType = {
  _key: string;
  url: string;
  cover: {
    asset: { _type: string; _ref: string };
    _type: string;
  };
  caption: string;
  alt: string;
};

export interface HeroContextType {
  data: {
    socials: HeroSocialType[];
    greeting: {
      link: {
        text: string;
        slug: {
          current: string;
        };
      };
      text: TypedObject[];
    };
    cover: {
      asset: {
        _type: string;
        _ref: string;
      };
      _type: string;
    };
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

//////// About Section
export interface AboutContextType {
  data: {
    heading: {
      title: TypedObject[];
    };
    overview: TypedObject[];
    cv: {
      link: string;
      title: string;
    };
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

//////// Work Section
export interface WorkCollectionType {
  _key: string;
  link: {
    name: string;
    href: string;
  };
  description: string;
  designation: string;
  duration: {
    _type: string;
    start: string;
    end: string;
  };
  cover: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
}

export interface WorkContextType {
  data: {
    heading: {
      title: TypedObject[];
    };
    collection: WorkCollectionType[];
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

////////// Experiments
export type ExperimentCollectionType = {
  _key: string;
  heading: string;
  body: string;
  image: Image;
  link: {
    text: string;
    href: string;
  };
};

export interface ExperimentContextType {
  data: {
    heading: {
      title: TypedObject[];
    };
    collection: ExperimentCollectionType[];
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

//////////// Writings
export type WritingsCollectionType = {
  _key: string;
  heading: string;
  body: string;
  link: string;
  image: Image;
};

export interface WritingsContextType {
  data: {
    heading: {
      title: TypedObject[];
    };
    collection: WritingsCollectionType[];
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

//////////// Talks
export interface TalksContextType {
  data: object;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

//////////// Contacts
export interface ContactsContextType {
  data: {
    heading: {
      title: TypedObject[];
    };
    text: TypedObject[];
    link: {
      text: string;
      href: string;
    };
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

//////////// Footer
export interface FooterContextType {
  data: {
    heading: {
      title: TypedObject[];
    };
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}
