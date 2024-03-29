import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useQueries, QueryClient, QueryClientProvider } from "react-query";
import React, { createContext, useContext, useState, useCallback } from "react";
import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";
const sanityClient = createClient({
  projectId: "d3ylbkps",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: false
});
const fetchData = async (endpoint) => {
  const response = await sanityClient.fetch(endpoint).then((response2) => response2).catch((error) => console.log(error));
  return response;
};
const useReactQueries = (inputKeyAndEndpoints) => {
  const queries2 = inputKeyAndEndpoints.map((query) => {
    const { key = "", endpoint = "" } = query;
    return {
      queryKey: key,
      queryFn: () => fetchData(endpoint)
    };
  });
  return useQueries(queries2);
};
const navigationQuery = `*[_type == "navigation"][0]{
  heading,
  collection[]{
    _key,
    title,
    slug
  }
}`;
const heroQuery = `*[_type == "hero"][0]{
  socials[]{
    _key,
    cover,
    url,
    caption,
    alt
  },
  greeting{
    link,
    text
  },
  cover{
    asset
  }
}`;
const aboutQuery = `*[_type == "about"][0]{
  heading,
  overview,
  cv
}`;
const workQuery = `*[_type == "work"][0]{
  heading,
  collection[] {
    _key,
    title,
    designation,
    link,
    duration,
    description,
    cover
  }
}`;
const experimentsQuery = `*[_type == "experiments"][0]{
  heading,
  collection[]{
    _key,
    heading,
    body,
    image,
    link,
  }
}`;
const talksQuery = `*[_type == "talks"][0]{
  heading,
  collection[]{
    _key,
    heading,
    body,
    link,
    cover
  }
}`;
const writingsQuery = `*[_type == "writings"][0]{
  heading,
  collection[]{
    _key,
    image,
    heading,
    body,
    link
  }
}`;
const contactQuery = `*[_type == "contact"][0]{
  heading,
  text,
  link,  
}`;
const footerQuery = `*[_type == "footer"][0]{
  heading,
  email,
  copyright,
  socials,
  collection,
}`;
const queries = [
  { key: "navigation", endpoint: navigationQuery },
  { key: "hero", endpoint: heroQuery },
  { key: "about", endpoint: aboutQuery },
  { key: "work", endpoint: workQuery },
  { key: "experiments", endpoint: experimentsQuery },
  { key: "writings", endpoint: writingsQuery },
  { key: "talks", endpoint: talksQuery },
  { key: "contact", endpoint: contactQuery },
  { key: "footer", endpoint: footerQuery }
];
const initialState = {
  navigation: {
    data: {
      heading: {
        title: "",
        slug: {
          current: ""
        }
      },
      collection: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  hero: {
    data: {
      socials: [],
      greeting: {
        link: {
          text: "",
          slug: {
            current: ""
          }
        },
        text: []
      },
      cover: {
        asset: {
          _type: "reference",
          _ref: ""
        },
        _type: "image"
      }
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  about: {
    data: {
      heading: {
        title: []
      },
      overview: [],
      cv: {
        link: "",
        title: ""
      }
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  work: {
    data: {
      heading: {
        title: []
      },
      collection: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  experiments: {
    data: {
      heading: {
        title: []
      },
      image: {},
      collection: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  writings: {
    data: {
      heading: {
        title: []
      },
      collection: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  talks: {
    data: {
      heading: {
        title: []
      },
      collection: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  contact: {
    data: {
      heading: {
        title: []
      },
      text: [],
      link: {
        text: "",
        href: ""
      }
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  footer: {
    data: {
      heading: {
        title: []
      },
      email: "",
      copyright: "",
      socials: [],
      collection: []
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  }
};
const getPortfolioContext = (response) => {
  const portfolioResponse = response.map((responseData) => {
    const { data, isLoading, isSuccess, isError, error } = responseData ?? {};
    return {
      data,
      isLoading,
      isSuccess,
      isError,
      error
    };
  });
  let portfolioData = {
    ...initialState
  };
  queries.forEach((query, index) => {
    const { key } = query;
    portfolioData = {
      ...portfolioData,
      [key]: portfolioResponse[index]
    };
  });
  return portfolioData;
};
const PortfolioContext = createContext(initialState);
const ContextWrapper = ({ children }) => {
  const response = useReactQueries(queries);
  const data = getPortfolioContext(response);
  return /* @__PURE__ */ jsx(PortfolioContext.Provider, { value: data, children });
};
const useHero = () => {
  const { hero } = useContext(PortfolioContext) ?? [];
  const { data } = hero ?? {};
  const { socials = [], greeting, cover = {} } = data ?? {};
  const { link, text: greetingText = [] } = greeting ?? {};
  const { text: buttonText = "", slug } = link ?? {};
  const { current: buttonSlug = "" } = slug ?? {};
  return {
    socials,
    cover,
    greetingText,
    buttonText,
    buttonSlug
  };
};
const useAbout = () => {
  const { about } = useContext(PortfolioContext) ?? [];
  const { data } = about ?? {};
  const { heading, overview = [], cv } = data ?? {};
  const { title: headingTitle = [] } = heading ?? {};
  const { link: cvLink = "", title: cvTitle = "" } = cv ?? {};
  return {
    overview,
    headingTitle,
    cvLink,
    cvTitle
  };
};
const useWork = () => {
  const { work } = useContext(PortfolioContext) ?? [];
  const { data } = work ?? {};
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};
  return {
    title,
    collection
  };
};
const useExperiments = () => {
  const { experiments } = useContext(PortfolioContext) ?? [];
  const { data } = experiments ?? {};
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};
  return {
    title,
    collection
  };
};
const useWritings = () => {
  const { writings } = useContext(PortfolioContext) ?? [];
  const { data } = writings ?? {};
  const { heading, collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};
  return {
    title,
    collection
  };
};
const useTalks = () => {
  const { talks } = useContext(PortfolioContext) ?? [];
  const { data } = talks ?? {};
  const { heading, collection } = data ?? {};
  const { title = [] } = heading ?? {};
  return {
    title,
    collection
  };
};
const useContact = () => {
  const { contact } = useContext(PortfolioContext) ?? [];
  const { data } = contact ?? {};
  const { heading, text = [], link } = data ?? {};
  const { text: linkText, href: linkUrl } = link ?? {};
  const { title = [] } = heading ?? {};
  return {
    title,
    text,
    linkText,
    linkUrl
  };
};
const useFooter = () => {
  const { footer } = useContext(PortfolioContext) ?? [];
  const { data } = footer ?? {};
  const { heading, email = "", copyright = "", socials = [], collection = [] } = data ?? {};
  const { title = [] } = heading ?? {};
  return {
    email,
    copyright,
    socials,
    collection,
    title
  };
};
const imageBuilder = createImageUrlBuilder({
  projectId: "d3ylbkps",
  dataset: "production"
});
const urlForImage = (source) => {
  var _a;
  if (!((_a = source == null ? void 0 : source.asset) == null ? void 0 : _a._ref)) {
    return void 0;
  }
  return imageBuilder == null ? void 0 : imageBuilder.image(source).auto("format").fit("max");
};
const Hero = () => {
  var _a, _b;
  const { socials, cover, greetingText, buttonText, buttonSlug } = useHero();
  return /* @__PURE__ */ jsx("section", { className: "bg-light relative mx-auto px-4 pt-6 pb-12 md:px-8 md:pt-12 md:pb-48 ", id: "home", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl flex flex-col items-start justify-start md:flex-row md:justify-start md:items-center md:space-x-6 lg:space-x-12 md:mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col absolute top-15 left-4 md:relative", children: socials.map((social) => {
      var _a2;
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: social.url,
          target: "_blank",
          className: "mb-6 md:w-12",
          title: social.caption,
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ jsx("img", { src: (_a2 = urlForImage(social.cover)) == null ? void 0 : _a2.width(24).url(), alt: social.alt })
        },
        social._key
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "order-first md:order-2 flex justify-start pl-12 md:pl-0 lg:pl-12", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx("img", { src: (_a = urlForImage(cover)) == null ? void 0 : _a.height(300).width(300).url(), alt: "Profile" }) }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx("img", { src: (_b = urlForImage(cover)) == null ? void 0 : _b.height(200).width(200).url(), alt: "Profile" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-lg md:max-w-md mt-16 md:mt-0 lg:max-w-lg", children: [
      /* @__PURE__ */ jsx(PortableText, { value: greetingText }),
      buttonText ? /* @__PURE__ */ jsx("a", { id: "home-contact", href: buttonSlug, className: "btn mt-8", children: buttonText }) : null
    ] })
  ] }) });
};
const About = () => {
  const { overview, headingTitle, cvLink, cvTitle } = useAbout();
  const isCvAvailable = cvTitle && cvLink;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-12 px-4 pb-24 md:pb-36 md:px-8", id: "about", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl flex flex-col md:flex-row justify-center items-start space-y-12 space-x-0 md:space-x-24 md:justify-start md:items-center md:mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl px-0 text-left md:text-center", children: /* @__PURE__ */ jsx(PortableText, { value: headingTitle }) }),
      /* @__PURE__ */ jsx("div", { className: "md:max-w-xl", children: /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx(PortableText, { value: overview }),
        isCvAvailable ? /* @__PURE__ */ jsx("div", { className: "mt-8 justify-center items-left md:items-center", children: /* @__PURE__ */ jsx(
          "a",
          {
            id: "about-cv-download-clicked",
            href: cvLink,
            target: "_blank",
            className: "btn",
            rel: "noopener noreferrer",
            children: cvTitle
          }
        ) }) : null
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "divider" })
  ] });
};
const Building = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    className: "lucide lucide-building",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("rect", { width: 16, height: 20, x: 4, y: 2, rx: 2, ry: 2 }),
      /* @__PURE__ */ jsx("path", { d: "M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" })
    ]
  }
);
const Clock = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    className: "lucide lucide-clock",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 10 }),
      /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
    ]
  }
);
const Work = () => {
  const { title, collection } = useWork();
  const renderCollection = () => {
    return collection.map((item) => {
      var _a;
      const { designation = "", description = "", link, cover, duration } = item ?? {};
      const { name: orgName = "", href: orgLink = "" } = link ?? {};
      const { start = "", end = "" } = duration ?? {};
      return /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[3%] w-[2px] min-h-full bg-primary" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 z-10", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "border-solid border-2 border-primary",
            src: (_a = urlForImage(cover)) == null ? void 0 : _a.width(48).height(48).url(),
            alt: orgName
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "w-[95%] p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold", children: designation }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(Building, {}),
            /* @__PURE__ */ jsx("a", { href: orgLink, className: "text-secondary font-bold", target: "_blank", rel: "noopener noreferrer", children: orgName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(Clock, {}),
            /* @__PURE__ */ jsxs("p", { className: "font-bold", children: [
              start,
              " - ",
              end
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { children: description })
        ] })
      ] }) }, item._key);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        id: "work",
        className: "px-4 pt-12 pb-24 px-relative flex flex-col justify-center items-start space-y-8 md:px-8 md:items-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-left p-0", children: /* @__PURE__ */ jsx(PortableText, { value: title }) }),
          /* @__PURE__ */ jsx("div", { className: "max-w-4xl md:mx-auto", children: /* @__PURE__ */ jsx("div", { className: "w-full pt-10 px-0 relative overflow-hidden", children: renderCollection() }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "divider" })
  ] });
};
const Experiments = () => {
  const { title, collection } = useExperiments();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-12 pb-24 px-4 md:px-8", id: "experiments", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-start space-y-24 max-w-4xl md:mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-left md:text-center p-0", children: /* @__PURE__ */ jsx(PortableText, { value: title }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-24 md:space-y-0 md:space-x-16 md:flex-row justify-between", children: collection.map((item) => {
        var _a;
        const { _key = "", heading = "", body = "", link, image = {} } = item ?? {};
        const { href = "" } = link ?? {};
        return /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3", children: /* @__PURE__ */ jsxs("a", { href, target: "_blank", className: "group", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-[300px] w-auto max-h-[250px] overflow-hidden flex flex-col justify-center items-start md:items-center", children: /* @__PURE__ */ jsx("img", { src: (_a = urlForImage(image)) == null ? void 0 : _a.height(250).url(), alt: heading }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-sans font-bold mb-4 group-hover:text-secondary", children: heading }),
            /* @__PURE__ */ jsx("p", { className: "text-md mb-4 group-hover:text-secondary", children: body })
          ] })
        ] }) }, _key);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "divider" })
  ] });
};
const Writings = () => {
  const { title, collection } = useWritings();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-4 pt-12 pb-24 md:px-8", id: "writings", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl flex flex-col justify-center items-start space-x-0 space-y-12 md:space-x-48 md:flex-row md:justify-between md:space-y-0 md:mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-left md:text-center p-0", children: /* @__PURE__ */ jsx(PortableText, { value: title }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-12 justify-between", children: collection.map((item) => {
        var _a;
        const { _key = "", heading = "", body = "", link = "", image = {} } = item ?? {};
        return /* @__PURE__ */ jsx("div", { className: "max-w-lg", children: /* @__PURE__ */ jsxs("a", { target: "_blank", href: link, className: "group", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 overflow-hidden rounded-md shadow-xl", children: /* @__PURE__ */ jsx("img", { src: (_a = urlForImage(image)) == null ? void 0 : _a.url(), alt: heading }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-sans font-bold mb-4 group-hover:text-secondary", children: heading }),
          /* @__PURE__ */ jsx("p", { className: "text-sm mb-4 group-hover:text-secondary", children: body })
        ] }) }, _key);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "divider" })
  ] });
};
const Contact = () => {
  const { title, text, linkText, linkUrl } = useContact();
  return /* @__PURE__ */ jsxs("section", { className: "px-4 pt-12 pb-24 md:px-8 flex flex-col justify-center items-start md:items-center", id: "contact", children: [
    /* @__PURE__ */ jsx("div", { className: "pb-4 md:pb-8 max-w-2xl md:text-center", children: /* @__PURE__ */ jsx(PortableText, { value: title }) }),
    /* @__PURE__ */ jsx("div", { className: "pb-4 w-full text-left max-w-2xl md:text-center", children: /* @__PURE__ */ jsx(PortableText, { value: text }) }),
    /* @__PURE__ */ jsxs("a", { id: "contact-link", href: linkUrl, className: "btn", children: [
      linkText,
      " →"
    ] })
  ] });
};
const Navigation = () => {
  const { navigation } = useContext(PortfolioContext) ?? [];
  const { data } = navigation ?? {};
  const { collection = [] } = data ?? {};
  const [menuShowcase, setMenuShowcase] = useState(false);
  const toggleMobileMenuShow = useCallback(() => {
    setMenuShowcase((prevMenuShowcase) => !prevMenuShowcase);
  }, []);
  const navigateToSection = useCallback(
    (slug) => {
      document.location.href = `${slug}`;
      toggleMobileMenuShow();
    },
    [toggleMobileMenuShow]
  );
  const renderMobileNavigationItems = () => {
    let renderedList = null;
    if (collection.length > 0) {
      renderedList = collection.map((navItem) => {
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-2xl font-sans font-bold px-4 text-primary hover:text-secondary duration-200",
            onClick: () => navigateToSection(navItem == null ? void 0 : navItem.slug.current),
            children: navItem.title
          }
        ) }, navItem._key);
      });
    }
    return renderedList;
  };
  const renderNavigationItems = () => {
    let renderedList = null;
    if (collection.length > 0) {
      renderedList = collection.map((navItem) => {
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-xl font-sans font-bold px-4 text-primary hover:text-secondary duration-200",
            href: navItem == null ? void 0 : navItem.slug.current,
            children: navItem.title
          }
        ) }) }, navItem._key);
      });
    }
    return renderedList;
  };
  return /* @__PURE__ */ jsxs("header", { className: "relative flex justify-end items-center p-0 px-4 py-8 md:px-8 md:py-12", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex justify-end items-center max-w-4xl md:mx-auto", children: [
      /* @__PURE__ */ jsx("ul", { className: "space-x-2 hidden md:flex", children: renderNavigationItems() }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxs(
        "button",
        {
          id: "menu-btn",
          className: `hamburger z-50 block md:hidden focus:outline-none ${menuShowcase ? "open" : ""}`,
          onClick: toggleMobileMenuShow,
          children: [
            /* @__PURE__ */ jsx("span", { className: "hamburger-top" }),
            /* @__PURE__ */ jsx("span", { className: "hamburger-middle" }),
            /* @__PURE__ */ jsx("span", { className: "hamburger-bottom" })
          ]
        }
      ) })
    ] }),
    menuShowcase ? /* @__PURE__ */ jsx("div", { id: "menu-banner", className: "z-40 absolute top-0 left-0 space-y-4 bg-light w-full h-screen", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col w-full h-full space-y-8 justify-center items-center", children: renderMobileNavigationItems() }) }) : null
  ] });
};
const Footer = () => {
  const { email, copyright, socials, collection, title } = useFooter();
  return /* @__PURE__ */ jsx("footer", { className: "px-4 pt-12 pb-24 md:px-8 bg-light", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-16 max-w-4xl mx-auto justify-between items-start md:flex-row md:space-y-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2 text-left p-0", children: [
        /* @__PURE__ */ jsx("a", { href: "/#", className: "text-2xl font-sans font-bold text-secondary", children: /* @__PURE__ */ jsx(PortableText, { value: title }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-poppins text-primary", children: email }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-poppins text-primary", children: copyright })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-3 mt-4", children: socials.map((social) => {
        var _a;
        return /* @__PURE__ */ jsx("a", { href: social.url, target: "_blank", title: social.caption, rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("img", { src: (_a = urlForImage(social.cover)) == null ? void 0 : _a.width(24).url(), alt: social.alt }) }, social._key);
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-between space-y-4 text-left md:text-right", children: collection.map((navItem) => {
      return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { className: "text-lg font-bold font-sans text-primary", href: navItem == null ? void 0 : navItem.slug.current, children: navItem.title }) }, navItem._key);
    }) })
  ] }) });
};
function Layout({ children }) {
  const { navigation, hero, about, work, experiments, writings, talks, contact, footer } = useContext(PortfolioContext) ?? [];
  const { isSuccess: isSuccessNavigation } = navigation;
  const { isSuccess: isSuccessLoading } = hero;
  const { isSuccess: isSuccessAbout } = about;
  const { isSuccess: isSuccessWork } = work;
  const { isSuccess: isSuccessExperiments } = experiments;
  const { isSuccess: isSuccessWritings } = writings;
  const { isSuccess: isSuccessTalks } = talks;
  const { isSuccess: isSuccessContact } = contact;
  const { isSuccess: isSuccessFooter } = footer;
  const isSuccess = isSuccessNavigation && isSuccessLoading && isSuccessAbout && isSuccessWork && isSuccessExperiments && isSuccessWritings && isSuccessTalks && isSuccessContact && isSuccessFooter;
  let child = null;
  if (isSuccess) {
    child = /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx(Navigation, {}),
      /* @__PURE__ */ jsx("div", { className: "flex-grow", children }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen flex-col text-black", children: child });
}
const Talks = () => {
  const { title, collection } = useTalks();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-4 pt-12 pb-24 md:px-8", id: "talks", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-start space-y-24 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-left md:text-center p-0", children: /* @__PURE__ */ jsx(PortableText, { value: title }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-24 md:space-y-0 md:space-x-32 md:flex-row justify-center", children: collection.map((item) => {
        var _a;
        const { _key = "", heading = "", body = "", link, cover = {} } = item ?? {};
        const { url = "" } = link ?? {};
        return /* @__PURE__ */ jsx("div", { className: "w-full py-2", children: /* @__PURE__ */ jsxs("a", { href: url, target: "_blank", className: "group", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-12 w-auto overflow-hidden flex flex-col justify-start items-start md:items-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "rounded-md shadow-xl",
              src: (_a = urlForImage(cover)) == null ? void 0 : _a.height(350).width(450).url(),
              alt: heading
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-sans font-bold mb-4 group-hover:text-secondary", children: heading }),
            /* @__PURE__ */ jsx("p", { className: "text-md mb-4 group-hover:text-secondary", children: body })
          ] })
        ] }) }, _key);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "divider" })
  ] });
};
const Home = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Work, {}),
    /* @__PURE__ */ jsx(Experiments, {}),
    /* @__PURE__ */ jsx(Writings, {}),
    /* @__PURE__ */ jsx(Talks, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1e3 * 60 * 60 * 24
      // 24 hours
    }
  }
});
const App = () => {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ContextWrapper, { children: /* @__PURE__ */ jsx(Home, {}) }) });
};
const render = () => {
  return renderToString(/* @__PURE__ */ jsx(App, {}));
};
export {
  render
};
