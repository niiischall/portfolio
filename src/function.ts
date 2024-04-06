import fetch from 'node-fetch';
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
} from './lib/sanity.queries';

const PROJECT_ID = 'd3ylbkps';
const baseURL = 'api.sanity.io';
const apiVersion = 'v2023-10-01';
const queryConfig = 'data/query/production?query=';

export const getServerData = async () => {
  const apiEndpoint = `https://${PROJECT_ID}.${baseURL}/${apiVersion}/${queryConfig}`;

  const navigationRequest = fetch(`${apiEndpoint}${navigationQuery}`).then((response) => response.json());
  const heroRequest = fetch(`${apiEndpoint}${heroQuery}`).then((response) => response.json());
  const aboutRequest = fetch(`${apiEndpoint}${aboutQuery}`).then((response) => response.json());
  const workRequest = fetch(`${apiEndpoint}${workQuery}`).then((response) => response.json());
  const experimentsRequest = fetch(`${apiEndpoint}${experimentsQuery}`).then((response) => response.json());
  const talksRequest = fetch(`${apiEndpoint}${talksQuery}`).then((response) => response.json());
  const writingsRequest = fetch(`${apiEndpoint}${writingsQuery}`).then((response) => response.json());
  const contactRequest = fetch(`${apiEndpoint}${contactQuery}`).then((response) => response.json());
  const footerRequest = fetch(`${apiEndpoint}${footerQuery}`).then((response) => response.json());

  const response = await Promise.all([
    navigationRequest,
    heroRequest,
    aboutRequest,
    workRequest,
    experimentsRequest,
    talksRequest,
    writingsRequest,
    contactRequest,
    footerRequest,
  ])
    .then(
      ([
        navigationResponse,
        heroResponse,
        aboutResponse,
        workResponse,
        experimentsResponse,
        talksResponse,
        writingsResponse,
        contactResponse,
        footerResponse,
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
          footer: footerResponse.result,
        };
      },
    )
    .catch((error) => {
      console.error(error);
    });

  return response;
};
