import { createClient } from "@sanity/client";
import { useQuery } from "@tanstack/react-query";
import { combinedQuery } from "./sanity.queries";

const sanityClient = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID, 
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: import.meta.env.VITE_API_VERSION,
  token: import.meta.env.VITE_API_TOKEN,
  useCdn: true,
});

const fetchSanityData = async () => {
  return await sanityClient.fetch(combinedQuery);
};

export const useSanityData = () => {
  return useQuery({
    queryKey: ["sanity-data"],
    queryFn: fetchSanityData,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    retry: 2, // Retry twice in case of failure
  });
};