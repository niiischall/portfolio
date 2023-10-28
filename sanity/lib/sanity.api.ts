export const useCdn = false

export const dataset = assertValue(process.env.DATASET, 'Missing environment variable: DATASET')

export const projectId = assertValue(
  process.env.PROJECT_ID,
  'Missing environment variable: PROJECT_ID',
)

export const readToken = process.env.SANITY_API_READ_TOKEN || ''

export const apiVersion = process.env.API_VERSION || '2023-10-1'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
