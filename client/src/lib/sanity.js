import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "oa8t0gh6",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
