export const useCdn = false;

export const dataset = assertValue(process.env.VITE_SANITY_STUDIO_DATASET, 'Missing environment variable: DATASET');

export const projectId = assertValue(
  process.env.VITE_SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: PROJECT_ID',
);

export const apiVersion = process.env.VITE_API_VERSION || '2023-10-1';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
