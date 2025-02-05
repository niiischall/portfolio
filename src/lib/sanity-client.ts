import { createClient } from "@sanity/client";

export default createClient({
  projectId: import.meta.env.VITE_PROJECT_ID, 
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: import.meta.env.VITE_API_VERSION,
  token: import.meta.env.VITE_API_TOKEN,
  useCdn: true,
});