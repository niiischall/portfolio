import fetch from "node-fetch";
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
const PROJECT_ID = "d3ylbkps";
const baseURL = "api.sanity.io";
const apiVersion = "v2023-10-01";
const queryConfig = "data/query/production?query=";
const getServerData = async () => {
  const apiEndpoint = `https://${PROJECT_ID}.${baseURL}/${apiVersion}/${queryConfig}`;
  const navigationRequest = fetch(`${apiEndpoint}${navigationQuery}`).then((response2) => response2.json());
  const heroRequest = fetch(`${apiEndpoint}${heroQuery}`).then((response2) => response2.json());
  const aboutRequest = fetch(`${apiEndpoint}${aboutQuery}`).then((response2) => response2.json());
  const workRequest = fetch(`${apiEndpoint}${workQuery}`).then((response2) => response2.json());
  const experimentsRequest = fetch(`${apiEndpoint}${experimentsQuery}`).then((response2) => response2.json());
  const talksRequest = fetch(`${apiEndpoint}${talksQuery}`).then((response2) => response2.json());
  const writingsRequest = fetch(`${apiEndpoint}${writingsQuery}`).then((response2) => response2.json());
  const contactRequest = fetch(`${apiEndpoint}${contactQuery}`).then((response2) => response2.json());
  const footerRequest = fetch(`${apiEndpoint}${footerQuery}`).then((response2) => response2.json());
  const response = await Promise.all([
    navigationRequest,
    heroRequest,
    aboutRequest,
    workRequest,
    experimentsRequest,
    talksRequest,
    writingsRequest,
    contactRequest,
    footerRequest
  ]).then(
    ([
      navigationResponse,
      heroResponse,
      aboutResponse,
      workResponse,
      experimentsResponse,
      talksResponse,
      writingsResponse,
      contactResponse,
      footerResponse
    ]) => {
      return {
        navigation: navigationResponse.result,
        hero: heroResponse.result,
        about: aboutResponse.result,
        work: workResponse.result,
        experiments: experimentsResponse.result,
        talks: talksResponse.result,
        writings: writingsResponse.result,
        contact: contactResponse.result,
        footer: footerResponse.result
      };
    }
  ).catch((error) => {
    console.error(error);
  });
  return response;
};
export {
  getServerData
};
