import { useQuery } from "@tanstack/react-query";
import { combinedQuery } from "./sanity.queries";

const fetchSanityData = async () => {
  const response = await fetch(`/api/sanity?query=${combinedQuery}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data?.result;
};

export const useSanityData = () => {
  return useQuery({
    queryKey: ["sanity-data"],
    queryFn: fetchSanityData,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    retry: 2, // Retry twice in case of failure
  });
};